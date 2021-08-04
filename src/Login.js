import React, {useState} from "react";
import "./Login.css";
import {useDispatch} from "react-redux";
import  {login}  from "./features/userSlice";
import {auth} from "./firebase";

function Login(){

  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [name, setName]= useState("");
  const [pic, setPic]= useState("");
  const  dispatch=useDispatch();

   const LogintoApp=(e)=>{
     e.preventDefault();
   }

  const register=()=>{
    if(!name){
      return alert("Enter the name");
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:  name,
        photoUrl: pic,
      })
      .then(()=>{
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: pic
        }))
      })
    })
    .catch((error)=> alert(error.message));
  };

  return (
    <div className="login">
      <img src="https://www.seekpng.com/png/detail/371-3715298_advertise-on-linkedin-linkedin-logo-no-background.png" alt="Linkedin logo" />

      <form>
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name " type="text"/>
        <input value={pic} onChange={(e)=>setPic(e.target.value)} placeholder="Image URL" type="text" />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email " type="email"/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" />
        <button type="submit" onClink={LogintoApp}>Sign In</button>
      </form>

      <p>
        Not a member
        <span className="login_register" onClick={register} >Register Now</span>
      </p>
    </div>
  )
}

export default Login
