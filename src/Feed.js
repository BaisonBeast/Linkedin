import React, {useState, useEffect} from "react";
import CreateIcon from '@material-ui/icons/Create';
import "./Feed.css";
import InputOption from "./InputOptions";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from "./Post";
import {db} from "./firebase"
import firebase from  "firebase";

function Feed(){

/*Array of all the data to be stored*/
  const [posts, setPosts]= useState([]);
/*Input field */
  const [input, setInput]= useState("");

/*For every change change the posts. And render it according to timestamp*/
  useEffect(()=>{
      db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot)=>
        setPosts(
          snapshot.docs.map((doc)=>({
             id: doc.id,
             data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost=(event) =>{
    event.preventDefault();

    db.collection("posts").add({
      name: "Priyanshu",
      description: "This is the first post",
      message: input,
      photoUrl: "",
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };


  return  (

      <div className="feed">
        <div className="feed_inputCont">
          <div  className="feed_input">
            <CreateIcon  />
            <form>
              <input value={input} onChange={e =>  setInput(e.target.value)} type="text"/>
              <button onClick={sendPost} type="Submit"> Submit </button>
            </form>
          </div>

          <div className="feed_inputoption">
            <InputOption Icon={ImageIcon} title="Photo" color="#53B8BB"/>
            <InputOption Icon={SubscriptionsIcon} title="Video" color="#BCFFB9"/>
            <InputOption Icon={EventNoteIcon} title="Event" color="#FFAA4C"/>
            <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#FFA0A0"/>
          </div>
        </div>


{/*Posts*/}
            {posts.map(({id, data: {name, description, message, photoUrl} })=>(
              <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            ))}

      </div>
  )
}

export default Feed
