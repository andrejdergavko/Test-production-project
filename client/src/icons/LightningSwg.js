// @flow
import React from "react";

type LightningSwgT = {
  width?: string,
  height?: string,
};

const LightningSwg = ({ width = "100%", height = "100%" }: LightningSwgT) => (
  <svg
    width={width}
    height={height}
    viewBox="6 6 43.587 43.587"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      fill="currentColor"
      points="32.468 11.421 14.996 31.098 25.566 31.222 21.677 46.443 40.508 26.496 28.799 26.496 32.468 11.421"
    />
  </svg>
);

export default LightningSwg;
