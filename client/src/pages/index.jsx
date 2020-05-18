// @flow
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import CampaignsContainer from "./campaigns";
import PageContainer from "../components/PageContainer";

export default () => (
  <PageContainer>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/campaigns" />} />
      <Route path="/campaigns" component={CampaignsContainer} />
      <Route path="/channels" render={() => <div>Channels page</div>} />
      <Route path="/audiences" render={() => <div>Audiences page</div>} />
    </Switch>
  </PageContainer>
);
