import React from 'react';
import get from 'lodash/get';

import { useQuery } from "@apollo/react-hooks";

import {GET_CAMPAIGNS} from '../../gql/queries';

const CampaignsContainer = () => {
  const { data, loading, error } = useQuery(GET_CAMPAIGNS);


  if (loading) return <p>Loading.. </p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  return (
    <>
      {
        get(data, 'campaigns', []).map(campaign => {
          return (
            <p key={campaign.id}>{JSON.stringify(campaign)}</p>
          )
        })
      }
    </>
  )
};

export default CampaignsContainer;
