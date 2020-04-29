import React from "react";
import { useStyletron } from "styletron-react";

function NavItem({ label, iconComponent }) {
  const [css] = useStyletron();

  const navItem = css({
    display: "flex",
    alignItems: "center",
  });

  const icon = css({
    width: "25px",
    height: "25px",
    flexShrink: "0",
  });

  const text = css({
    margin: "0 10px 0 7px",
  });

  return (
    <div className={navItem}>
      <div className={icon}>{iconComponent}</div>
      <div className={text}>{label}</div>
    </div>
  );
}

export default NavItem;
