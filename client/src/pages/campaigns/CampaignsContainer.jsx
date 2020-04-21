import React from 'react';

import { useQuery } from "@apollo/react-hooks";

import { GET_CAMPAIGNS } from '../../gql/queries';

import CompaignsTable from './compaignsTable/CompaignsTable';

const CampaignsContainer = () => {
  const { data, loading, error } = useQuery(GET_CAMPAIGNS);


  if (loading) return <p>Loading.. </p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      <CompaignsTable />
    </>
  )
};

export default CampaignsContainer;
