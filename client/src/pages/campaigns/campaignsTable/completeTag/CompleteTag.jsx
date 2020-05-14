// @flow
import React from "react";
import { Tag } from "baseui/tag";

type CompleteTagT = {
  isActive: boolean,
};

function CompleteTag({ isActive }: CompleteTagT) {
  return (
    <Tag
      closeable={false}
      kind={isActive ? "positive" : "primary"}
      overrides={{
        Root: {
          style: () => ({
            marginLeft: "-7px",
          }),
        },
      }}
    >
      {isActive ? "Active" : "Inactive"}
    </Tag>
  );
}

export default CompleteTag;
