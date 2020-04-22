import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAMPAIGNS } from "../../gql/queries";

import CompaignsTable from "./compaignsTable";
import CompleteTag from "./compaignsTable/completeTag";
import CreationDate from "./compaignsTable/creationDate";
import Channels from "./compaignsTable/channels";
import { numberWithSeparator } from "../../utils/utils";

const CampaignsContainer = () => {
  const { data, loading, error } = useQuery(GET_CAMPAIGNS);

  if (loading) return <p>Loading.. </p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const dataForTable = data.campaigns.map((campaign) => {
    const {
      name,
      channels,
      createdAt,
      clicks,
      views,
      author,
      isActive,
    } = campaign;

    const rowData = [
      name,
      <Channels channels={channels} />,
      <CreationDate date={createdAt} />,
      numberWithSeparator(clicks, ','),
      numberWithSeparator(views, ','),
      author,
      <CompleteTag isActive={isActive} />,
    ];

    return rowData;
  });

  return (
    <div>
      <CompaignsTable data={dataForTable} />
    </div>
  );
};

export default CampaignsContainer;
