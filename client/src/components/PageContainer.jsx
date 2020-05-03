import React from "react";

import Header from "./Header";
import Sidebar from "./sidebar";
import { useStyletron } from "styletron-react";

export default ({ children }) => {
  const [css] = useStyletron();

  const pageContainer = css({
    display: "flex",
    height: "100vh",
    flexDirection: "column",
  });

  const wrapper = css({
    display: "flex",
    flexGrow: "1",
  });

  const main = css({
    flexGrow: "1",
  });

  return (
    <div className={pageContainer}>
      <Header />
      <div className={wrapper}>
        <Sidebar />
        <div className={main}>{children}</div>
      </div>
    </div>
  );
};
