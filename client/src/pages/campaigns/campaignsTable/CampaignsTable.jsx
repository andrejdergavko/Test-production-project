import React from "react";
import { Table } from "baseui/table-semantic";

const COLUMNS = [
  "Campaign name",
  "Channels",
  "Created At",
  "Clicks",
  "Views",
  "Created By",
  "Status",
  ""
];

function CampaignsTable({ data }) {
  return (
    <Table
      columns={COLUMNS}
      data={data}
      overrides={{
        Root: {
          style: () => {
            return { border: "#f6f6f6 solid 2px" };
          },
        },
        TableHeadCell: {
          style: () => {
            return {
              backgroundColor: "#f6f6f6",
              "::before": { borderLeftStyle: "none" },
              "::after": { backgroundImage: "none" },
            };
          },
        },
        TableBodyRow: {
          style: () => {
            return {
              outline: "#f6f6f6 solid 1px",
              backgroundColor: "#fff",
            };
          },
        },
        TableBodyCell: {
          style: () => {
            return {
              verticalAlign: "middle",
            };
          },
        },
      }}
    />
  );
}

export default CampaignsTable;
