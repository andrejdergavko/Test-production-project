import React from "react";

import "./Channels.css";

const iconURLs = {
  EMAIL: "https://img.icons8.com/material/24/000000/important-mail.png",
  SMS:
    "https://img.icons8.com/material-rounded/24/000000/comment-discussion.png",
};

function Channels({ channels }) {
  const icons = channels.map((channel) => {
    return (
      <img
        className="channels__icon"
        src={iconURLs[channel.name]}
        alt={iconURLs[channel.name]}
      />
    );
  });
  return <div>{icons}</div>;
}

export default Channels;
