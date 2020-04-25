import React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

import Header from "./Header";
import Sidebar from "./Sidebar";

const headerProps = {
  overrides: {
    Block: {
      style: () => ({
        width: "100%",
        flexGrow: 0,
      }),
    },
  },
};

const sidebarProps = {
  overrides: {
    Block: {
      style: () => ({
        width: "100px",
        flexGrow: 0,
      }),
    },
  },
};

export default ({ children }) => {
  return (
    // <FlexGrid
    //   flexGridColumnCount={2}
    //   flexGridColumnGap={0}
    //   flexGridRowGap={0}
    //   marginBottom={0}
    // >
    //   <FlexGridItem {...headerProps}>
    //     <Header />
    //   </FlexGridItem>

    //   <FlexGridItem display="none" />

    //   <FlexGridItem {...sidebarProps}>
    //     <Sidebar />
    //   </FlexGridItem>

    //   <FlexGridItem>{children}</FlexGridItem>
    // </FlexGrid>

    <div>
      <Header />

      <div>
        <div style={{display: 'inline-block'}}><Sidebar /></div>
        <div style={{display: 'inline-block'}}>{children}</div>
      </div>
    </div>
  );
};
