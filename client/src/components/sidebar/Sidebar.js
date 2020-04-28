import * as React from "react";
import { Navigation } from "baseui/side-navigation";
import { withRouter } from "react-router";

import NavItem from "./navItem";

const Sidebar = ({ history, location }) => {
  return (
    <Navigation
      items={[
        {
          title: "Overview",
          itemId: "/",
        },
        {
          title: <NavItem label={'Campaigns'}/>,
          itemId: "/campaigns",
        },
      ]}
      activeItemId={location.pathname}
      onChange={({ event, item }) => {
        event.preventDefault();
        history.push(item.itemId);
      }}
      overrides={{
        Root: {
          style: () => {
            return {
              width: "150px",
              padding: "20px 15px",
              backgroundColor: "#f6f6f6",
            };
          },
        },
        NavItemContainer: {
          style: () => {
            return {
              margin: "10px 0",
            };
          },
        },
        NavItem: {
          style: ({ $active }) => {
            if ($active) {
              return {
                padding: "5px",
                borderRadius: "50px",
                fontWeight: "500",
                color: "#fff",
                borderLeft: "none",
                backgroundColor: "#000",
                backgroundImage: "none",
                ":hover": {
                  color: "#fff",
                },
              };
            }
            return {
              padding: "5px",
              borderRadius: "50px",
              fontWeight: "500",
              ":hover": {
                backgroundColor: "#dfdfdf",
              },
            };
          },
        },
      }}
    />
  );
};

export default withRouter(Sidebar);
