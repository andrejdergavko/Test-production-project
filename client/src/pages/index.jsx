import React from "react";
import { Route } from "react-router-dom";
import CampaignsContainer from "./campaigns";
import PageContainer from "../components/PageContainer";

export default () => (
  <PageContainer>
    <Route path="/" exact render={() => <h4>Campaigns page</h4>} />
    <Route path="/campaigns" exact component={CampaignsContainer} />
  </PageContainer>
);
