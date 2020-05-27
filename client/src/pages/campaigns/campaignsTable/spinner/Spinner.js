//@flow
import React from "react";
import { Spinner as Spin } from "baseui/spinner";
import { useStyletron } from "styletron-react";

function Spinner() {
  const [css] = useStyletron();
  const spinnerBox = css({
    position: "absolute",
    display: "flex",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    zIndex: 1000,
  });

  return (
    <div className={spinnerBox}>
      <Spin
        overrides={{
          ActivePath: {
            style: () => ({ fill: "#000" }),
          },
        }}
      />
    </div>
  );
}

export default Spinner;
