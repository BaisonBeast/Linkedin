import React from "react";
import CreateIcon from '@material-ui/icons/Create';
import "./Feed.css";
import InputOption from "./InputOptions";
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

function Feed(){
  return  (
      <div className="feed">
        <div className="feed_inputCont">
          <div  className="feed_input">
            <CreateIcon  />
            <form>
              <input type="text"/>
              <button type="Submit"> Submit </button>
            </form>
          </div>
          <div className="feed_inputoption">
            <InputOption Icon={ImageIcon} title="Photo" color="#53B8BB"/>
            <InputOption Icon={SubscriptionsIcon} title="Video" color="#BCFFB9"/>
            <InputOption Icon={EventNoteIcon} title="Event" color="#FFAA4C"/>
            <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#FFA0A0"/>


          </div>
        </div>
      </div>
  )
}

export default Feed
