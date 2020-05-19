// @flow
import React from "react";
import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import SearchInput from "./searchInput";

type SearchPanelT = {
  nameFilter: string[],
  setNameFilter: (a: string[]) => void,
  numberOfFound: number,
};

function SearchPanel({
  nameFilter,
  setNameFilter,
  numberOfFound,
}: SearchPanelT) {
  const [css] = useStyletron();
  const searchPanel = css({
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <div className={searchPanel}>
      <Block font="font750">{numberOfFound} campaigns</Block>
      <SearchInput nameFilter={nameFilter} setNameFilter={setNameFilter} />
    </div>
  );
}

export default SearchPanel;
