// @flow
import React from "react";
import { useStyletron } from "baseui";

import { CHANNELS } from "../../../../constants";

type ChannelsT = {
  channels?: ({ name: number })[],
};

function Channels({ channels }: ChannelsT) {
  const [css] = useStyletron();
  const icon = css({
    width: "17px",
    height: "17px",
    marginRight: "5px",
  });
  const iconWrapper = css({
    display: "flex",
  });

  if (!channels || channels.length === 0) {
    return <div>-</div>;
  }

  channels.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  const icons = channels.map((channel) => {
    const { id, label, iconURL } = CHANNELS.find(
      (item) => item.id === channel.name
    );

    return <img key={id} className={icon} src={iconURL} alt={label} />;
  });

  return <div className={iconWrapper}>{icons}</div>;
}

export default Channels;
