import React from 'react';
import { Route } from 'react-router-dom';
import CampaignsContainer from './campaigns';
import PageContainer from '../components/PageContainer';

export default () => (
  <PageContainer>
    <Route path='/' component={CampaignsContainer} />
  </PageContainer>
);
