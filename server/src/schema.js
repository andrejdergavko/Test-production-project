const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    campaigns: [Campaign]!
    campaign(id: String!): Campaign
  }

  type Mutation {
    createCampaign(name: String!): CampaignCreateResponse!
  }

  type CampaignCreateResponse {
    campaigns: [Campaign]!
  }

  type Campaign {
    id: ID!
    name: String!
    createdAt: String!
    author: String!
    clicks: Int!
    views: Int!
    isActive: Boolean!
    channels: [Channel]!
  }

  type Channel {
    name: String!
  }

`;

module.exports = typeDefs;