import * as React from "react";
import { Navigation } from "baseui/side-navigation";

export default () => {
  const [activeItemId, setActiveItemId] = React.useState("#shades");
  return (
    <Navigation
      items={[
        {
          title: "Colors1",
          itemId: "#colors1",
        },
        {
          title: "Colors2",
          itemId: "#colors2",
        },
      ]}
      activeItemId={activeItemId}
      onChange={({ item }) => setActiveItemId(item.itemId)}
      overrides={{
        Root: {
          style: ({ $theme }) => {
            return {
                width: '200px',
                height: '100%',
                float: 'left',
                // zIndex: '1000',
                backgroundColor: '#f6f6f6',
                
                
            };
          },
        },
        NavItemContainer: {
          style: ({ $theme }) => {
            return {
            };
          },
        },
        NavLink: {
          style: ({ $theme }) => {
            return {
            };
          },
        },
        NavItem: {
          style: ({ $theme }) => {
            return {
            };
          },
        },
        SubNavContainer: {
          style: ({ $theme }) => {
            return {
            };
          },
        },
      }}
    />
  );
};
