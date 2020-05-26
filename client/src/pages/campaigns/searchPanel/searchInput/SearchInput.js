// @flow
import * as React from "react";
import { Input } from "baseui/input";
import Search from "baseui/icon/search";

type SearchInputT = {
  nameFilter: string[],
  setNameFilter: (a: string[]) => void,
};

const SearchInput = ({ nameFilter, setNameFilter }: SearchInputT) => {
  return (
    <Input
      value={nameFilter[0]}
      onChange={(e) => {
        setNameFilter([e.target.value]);
      }}
      placeholder="Search compaigns by name"
      startEnhancer={<Search size="25px" />}
      overrides={{
        Root: {
          style: () => {
            return {
              width: "500px",
            };
          },
        },
      }}
    />
  );
};

export default SearchInput;
