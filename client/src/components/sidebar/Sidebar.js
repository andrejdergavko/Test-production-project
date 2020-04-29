import * as React from "react";
import { Navigation } from "baseui/side-navigation";
import { withRouter } from "react-router";

import NavItem from "./navItem";
import HomeSwg from "../../icons/HomeSwg";
import LightningSwg from "../../icons/LightningSwg";

const Sidebar = ({ history, location }) => {
  return (
    <Navigation
      items={[
        {
          title: <NavItem label={"Overview"} iconComponent={<HomeSwg />} />,
          itemId: "/",
        },
        {
          title: <NavItem label={"Campaigns"} iconComponent={<LightningSwg />} />,
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
              maxWidth: '37px',
              padding: "20px 15px",
              backgroundColor: "#f6f6f6",
              transition:  "max-width 0.2s",
              ':hover': {
                maxWidth: '500px',
              }
            };
          },
        },
        NavItemContainer: {
          style: () => {
            return {
              margin: "15px 0",
            };
          },
        },
        NavItem: {
          style: ({ $active }) => {
            const common = {
              padding: "6px 6px",
              borderRadius: "50px",
              borderLeft: "none",
              fontWeight: "500",
              overflow: "hidden",
              transition: "0.1s",
              backgroundImage: "none",
            };
            if ($active) {
              return {
                ...common,
                color: "#fff",
                backgroundColor: "#000",
                ":hover": {
                  color: "#fff",
                },
              };
            }
            return {
              ...common,
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
