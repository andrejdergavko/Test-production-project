module.exports = {
  Query: {
    campaigns: (parent, args, context) => {
      const { dataSources } = context;

      return dataSources.campaignAPI.getAllCampaigns();
    },
    campaign: (parent, args, context) => {
      const { dataSources } = context;
      const { id } = args;
      const result = dataSources.campaignAPI.getCampaignById({ id });
      return result;
    },
    campaignByFilter: (parent, args, context) => {
      const { dataSources } = context;
      const { filter } = args;
      const result = dataSources.campaignAPI.getCampaignByFilter({ filter });
      return result;
    },
  },
  Mutation: {
    createCampaign: (parent, args, context) => {
      const { dataSources } = context;
      const { name } = args;
      const result = dataSources.campaignAPI.createCampaign({ name });
      return result;
    },
  },
};
