// @flow
import * as React from "react";
import { Table } from "baseui/table-semantic";
import { useStyletron } from "styletron-react";

import Spinner from "./spinner";
import styles from './styles';

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
        overrides={styles.table}
      />
    </div>
  );
}

export default CampaignsTable;
