// @flow
import React from "react";

type HomeSwgT = {
  width?: string,
  height?: string,
};

const HomeSwg = ({ width = "100%", height = "100%" }: HomeSwgT) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 31 31"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M27.3,13.9L23,10.2V6c0-0.6-0.4-1-1-1h-2c-0.6,0-1,0.4-1,1v0.9l-3.3-2.8c-0.4-0.3-1-0.3-1.4,0L2.7,13.9  C2.2,14.3,2.5,15,3.1,15H5v11c0,0.6,0.4,1,1,1h6v-6c0-1.7,1.3-3,3-3s3,1.3,3,3v6h6c0.6,0,1-0.4,1-1V15h1.9  C27.5,15,27.8,14.3,27.3,13.9z"
    />
  </svg>
);

export default HomeSwg;
