// @flow
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useQuery } from "@apollo/react-hooks";
import { GET_CAMPAIGNS_BY_FILTER } from "../../gql/queries";

import FilterPanel from "./filterPanel";
import SearchPanel from "./searchPanel";
import CampaignsTable from "./campaignsTable";
import CompleteTag from "./campaignsTable/completeTag";
import Channels from "./campaignsTable/channels";
import Popover from "./campaignsTable/popover";
import { numberWithSeparator, convertTimestampToDate } from "../../utils/utils";

import type {
  GetCampaingsByFilterQuery,
  GetCampaingsByFilterQueryVariables,
} from "./types.js";

const CampaignsContainer = () => {
  const { data, loading, error, refetch } = useQuery<
    GetCampaingsByFilterQuery,
    GetCampaingsByFilterQueryVariables
  >(GET_CAMPAIGNS_BY_FILTER);

  const [channelFilter, setChannelFilter] = useState([]);
  const [statusFilter, setStatusFilter] = useState([]);
  const [nameFilter, setNameFilter] = useState(['']);
  console.log(channelFilter, statusFilter, nameFilter)

  useEffect(() => {
    refetch({
      filter: [
        {
          field: "channels",
          values: channelFilter,
        },
        {
          field: "isActive",
          values: statusFilter,
        },
        {
          field: "name",
          values: nameFilter,
        },
      ],
    });
  }, [channelFilter, statusFilter, nameFilter]);

  const clearFilter = () => {
    setChannelFilter([]);
    setStatusFilter([]);
    setNameFilter(['']);
  };

  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  const dataForTable = _.get(data, "campaignByFilter", []).map((campaign) => {
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
      <SearchPanel  nameFilter={nameFilter} setNameFilter={setNameFilter} numberOfFound={dataForTable.length}/>
      <FilterPanel
        setChannelFilter={setChannelFilter}
        setStatusFilter={setStatusFilter}
        nameFilter={nameFilter}
        clearFilter={clearFilter}
      />
      <CampaignsTable loading={loading} data={dataForTable} />
    </>
  );
};

export default CampaignsContainer;
