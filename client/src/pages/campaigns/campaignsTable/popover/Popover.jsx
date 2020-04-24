import React, { useState } from "react";
import { StatefulPopover, PLACEMENT } from "baseui/popover";
import { useStyletron } from "styletron-react";
import Menu from "../menu";

function Popover() {
  const [isOpen, setIsOpen] = useState(false);
  const [css] = useStyletron();
  const icon = css({
    width: "17px",
  });
  const iconWrapper = css({
    display: "flex",
    width: "40px",
    height: "40px",
    alignItems: "center",
    justifyContent: "center",
  });
  const active = css({
    backgroundColor: "#eee",
  });

  return (
    <StatefulPopover
      onOpen={() => {
        setIsOpen(true);
      }}
      onClose={() => {
        setIsOpen(false);
      }}
      content={() => <Menu />}
      placement={PLACEMENT.auto}
      overrides={{
        Inner: {
          style: () => {
            return {
              backgroundColor: "#fff",
            };
          },
        },
      }}
    >
      <div className={`${iconWrapper} ${isOpen ? active : ""}`}>
        <img
          className={icon}
          src="https://img.icons8.com/material-rounded/24/000000/menu-2.png"
          alt="menu"
        />
      </div>
    </StatefulPopover>
  );
}

export default Popover;
