import * as React from "react";
import { Navigation } from "baseui/side-navigation";
import { withRouter } from "react-router";

import NavItem from "./navItem";
import HomeSwg from "../../icons/HomeSwg";
import LightningSwg from "../../icons/LightningSwg";
import overrides from './overrides';

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
      overrides={overrides.navigation}
    />
  );
};

export default withRouter(Sidebar);
