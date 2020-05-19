// @flow
import * as React from "react";
import { Table } from "baseui/table-semantic";
import { useStyletron } from "styletron-react";

import Spinner from "./spinner";

const COLUMNS = [
  "Campaign name",
  "Channels",
  "Created At",
  "Clicks",
  "Views",
  "Created By",
  "Status",
  "",
];

type CampaignsTableRowT = (string | React.Node)[];

type CampaignsTableT = {
  data: CampaignsTableRowT[],
  loading?: boolean,
};

function CampaignsTable({ data, loading }: CampaignsTableT) {
  const [css] = useStyletron();
  const tableBox = css({
    position: "relative",
    minHeight: "200px",
  });

  return (
    <div className={tableBox}>
      {loading && <Spinner />}
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
    </div>
  );
}

export default CampaignsTable;
