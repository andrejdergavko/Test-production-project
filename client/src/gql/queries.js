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