// @flow
import * as React from "react";

import Header from "./header";
import Sidebar from "./sidebar";
import { useStyletron } from "styletron-react";

type PageContainerT = {
  children?: React.Node,
};

function PageContainer({ children }: PageContainerT) {
  const [css] = useStyletron();

  const pageContainer = css({
    display: "flex",
    height: "100vh",
    flexDirection: "column",
  });

  const wrapper = css({
    display: "flex",
    flexGrow: 1,
  });

  const main = css({
    flexGrow: 1,
    padding: "20px",
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
}

export default PageContainer;
