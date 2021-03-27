import { Avatar } from "@material-ui/core";
import React from "react";
import "../Post.css";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>timestamp...</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
