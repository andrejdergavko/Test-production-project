import gql from "graphql-tag";

export const GET_CAMPAIGNS = gql`
  query GetListCampaigns {
    campaigns {
      id
      name
      createdAt
      author
      clicks
      views
      isActive
      channels {
        name
      }
    }
  }
`;

export const GET_CAMPAIGNS_BY_FILTER = gql`
  query GetCampaingsByFilter ($filter: [CampaignsFilter]){
    campaignByFilter(filter: $filter) {
      id
      name
      createdAt
      author
      clicks
      views
      isActive
      channels {
        name
      }
    }
  }
`;
