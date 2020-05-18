// @flow
import React from "react";
import { StatefulMenu, OptionProfile } from "baseui/menu";

const ITEMS = [
  {
    title: "Edit",
    subtitle: "Continue editing your campaign",
    imgUrl: "https://img.icons8.com/ios/50/000000/edit.png",
  },
  {
    title: "Delete",
    subtitle: "Permanently delete this campaign",
    imgUrl: "https://img.icons8.com/ios/50/000000/delete.png",
  },
];

function Menu() {
  return (
    <StatefulMenu
      items={ITEMS}
      overrides={{
        List: {
          style: {
            padding: "0",
          },
        },
        Option: {
          component: OptionProfile,
          props: {
            getProfileItemLabels: ({ title, subtitle }) => ({
              title,
              subtitle,
            }),
            getProfileItemImg: (item) => item.imgUrl,
            getProfileItemImgText: (item) => item.title,
            overrides: {
              ListItemProfile: {
                style: () => ({
                  padding: "0",
                }),
              },
              ProfileImg: {
                style: () => ({
                  width: "25px",
                  height: "25px",
                  padding: "10px",
                  borderRadius: "0px",
                }),
              },
              ProfileLabelsContainer: {
                style: () => ({
                  margin: "0",
                  padding: "15px 15px 15px 0",
                  flexGrow: "1",
                  borderBottom: "1px solid #eee",
                }),
              },
            },
          },
        },
      }}
    />
  );
}

export default Menu;
