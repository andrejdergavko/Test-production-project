//@flow
import * as React from "react";
import { useEffect, useState } from "react";
import { Input } from "baseui/input";
import { useStyletron } from "baseui";
import Search from "baseui/icon/search";

const SearchInput = ({ nameFilter, setNameFilter }) => {
  return (
    <Input
      value={nameFilter[0]}
      onChange={(e) => {
        console.log(e.target.value)
        setNameFilter([e.target.value])}}
      placeholder="Search compaigns by name"
      overrides={{
        Root: {
          style: () => {
            return {
              width: "450px",
            };
          },
        },
        Before: function Before() {
          const [css, theme] = useStyletron();
          return (
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
                paddingLeft: theme.sizing.scale500,
              })}
            >
              <Search size="25px" />
            </div>
          );
        },
      }}
    />
  );
};

export default SearchInput;
