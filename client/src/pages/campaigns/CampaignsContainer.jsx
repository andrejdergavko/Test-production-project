import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAMPAIGNS, GET_CAMPAIGNS_BY_FILTER } from "../../gql/queries";

import FilterPanel from "./filterPanel";
import CampaignsTable from "./campaignsTable";
import CompleteTag from "./campaignsTable/completeTag";
import Channels from "./campaignsTable/channels";
import Popover from "./campaignsTable/popover";
import { numberWithSeparator, convertTimestampToDate } from "../../utils/utils";

const CampaignsContainer = () => {
  const { data, loading, error, refetch } = useQuery(GET_CAMPAIGNS_BY_FILTER);

  if (loading) return <p>Loading.. </p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const dataForTable = data.campaignByFilter.map((campaign) => {
    const {
      name,
      channels,
      createdAt,
      clicks,
      views,
      author,
      isActive,
    } = campaign;

    return [
      name,
      <Channels channels={channels} />,
      convertTimestampToDate(+createdAt, "/"),
      numberWithSeparator(clicks, ","),
      numberWithSeparator(views, ","),
      author,
      <CompleteTag isActive={isActive} />,
      <Popover />,
    ];
  });

  return (
    <>
      <FilterPanel refetch={refetch} />
      <CampaignsTable data={dataForTable} />
    </>
  );
};

export default CampaignsContainer;
