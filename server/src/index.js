const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const CampaignAPI = require('./datasources/campaign');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    campaignAPI: new CampaignAPI(),
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
