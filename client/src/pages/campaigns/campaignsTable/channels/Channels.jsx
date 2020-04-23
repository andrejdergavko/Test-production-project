import React from "react";
import { useStyletron } from "baseui";

const iconURLs = {
  EMAIL: "https://img.icons8.com/material/24/000000/important-mail.png",
  SMS:
    "https://img.icons8.com/material-rounded/24/000000/comment-discussion.png",
};

function Channels({ channels }) {
  const [css] = useStyletron();
  const icon = css({
    width: "17px",
    height: "17px",
    marginRight: "5px",
  });
  const iconWrapper = css({
    display: "flex",
  });

  channels.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  const icons = channels.map((channel) => {
    return (
      <img
        key={channel.name}
        className={icon}
        src={iconURLs[channel.name]}
        alt={channel.name}
      />
    );
  });

  return <div className={iconWrapper}>{icons}</div>;
}

export default Channels;
