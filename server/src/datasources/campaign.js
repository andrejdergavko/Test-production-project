const { v4 } = require('uuid');

const data = require('./data');

const prepareNewCmapaign = (name) => ({
  id: v4(),
  name,
  clicks: 0,
  views: 0,
  isActive: false,
  createdAt: new Date().getTime().toString(),
  channels: [],
  author: 'Serj',
});

class CampaignAPI {
  getAllCampaigns() {
    const response = data;
    return response;
  }

  getCampaignById({ id }) {
    const [ response ] = data.filter(campaign => campaign.id == id);
    return response;
  }

  createCampaign({ name }) {
    const newCampaign = prepareNewCmapaign(name);
    data.push(newCampaign);

    return {
      campaigns: data
    };
  }
}

module.exports = CampaignAPI;