import React from 'react';
import { Table } from "baseui/table-semantic";


function CompaignsTable({data}) {
  return (
    <Table
      columns={["Campaign name", "Channels", "Created At", "Clicks", "Views", "Created By", "Status"]}
      data={data}
      overrides={{
        Root: {
          style: ({ $theme }) => {
            return { border: "#f6f6f6 solid 2px" };
          }
        },
        TableHeadCell: {
          style: ({ $theme }) => {
            return {
              backgroundColor: "#f6f6f6",
              "::before": { borderLeftStyle: "none" },
              "::after": { backgroundImage: "none" }
            };
          }
        },
        TableBodyRow: {
          style: ({ $theme }) => {
            return {
              outline: "#f6f6f6 solid 1px",
              backgroundColor: "#fff",
            };
          }
        },
        TableBodyCell: {
          style: ({ $theme }) => {
            return {
              verticalAlign: "middle"
            };
          }
        }
      }}
    />
  );
}

export default CompaignsTable;