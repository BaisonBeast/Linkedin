import React from "react"
import "./Post.css"
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import InputOption from "./InputOptions";

function Post({name, description, message, photoUrl}){
  return (
    <div  className="post">

      <div className="post_header">
        <Avatar src={photoUrl}/>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="grey"/>
        <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="grey"/>
        <InputOption Icon={ShareIcon} title="Share" color="grey"/>
        <InputOption Icon={SendIcon} title="Send" color="grey"/>
      </div>
    </div>
  )
}

export default Post
