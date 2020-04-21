import React from 'react';
import { Table } from "baseui/table-semantic";


function CompaignsTable(props) {
  return (
    <Table
      columns={["Name", "Age", "Address"]}
      data={[
        [
          "Sarah Brown",
          31,
          "100 Broadway St., New York City, New York"
        ],
        [
          "Jane Smith",
          32,
          "100 Market St., San Francisco, California"
        ]
      ]}
      overrides={{
        TableBodyRow: {
          style: () => {
            return {
              outline: "#eee solid 1px",
              backgroundColor: "#fff"
            };
          }
        },
        TableHeadCell: {
          style: ({ $theme }) => {
            return {
              outline: `#fff solid 1px`,
            };
          }
        }
      }}
    />
  );
}

export default CompaignsTable;