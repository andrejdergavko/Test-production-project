// @flow
import React from "react";
import { useStyletron } from "baseui";
import SearchInput from "./searchInput";

function SearchPanel({ nameFilter, setNameFilter }) {
  const [css] = useStyletron();
  const searchPanel = css({
    marginBottom: "20px",
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <div className={searchPanel}>
      <div>10 campaigns</div>
      <SearchInput nameFilter={nameFilter} setNameFilter={setNameFilter} />
    </div>
  );
}

export default SearchPanel;
