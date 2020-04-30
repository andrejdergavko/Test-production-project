import * as React from "react";
import { withRouter } from "react-router";
import { Navigation } from "baseui/side-navigation";

import Search from "baseui/icon/search";
import Upload from "baseui/icon/upload";

import NavItem from "./navItem";
import HomeSwg from "../../icons/HomeSwg";
import LightningSwg from "../../icons/LightningSwg";
import overrides from "./overrides";

const Sidebar = ({ history, location }) => {
  return (
    <Navigation
      items={[
        {
          title: <NavItem label={"Overview"} iconComponent={<HomeSwg />} />,
          itemId: "/",
        },
        {
          title: (
            <NavItem label={"Campaigns"} iconComponent={<LightningSwg />} />
          ),
          itemId: "/campaigns",
        },
        {
          title: (
            <NavItem label={"Channels"} iconComponent={<Search size={25} />} />
          ),
          itemId: "/channels",
        },
        {
          title: (
            <NavItem label={"Audiences"} iconComponent={<Upload size={25} />} />
          ),
          itemId: "/audiences",
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
