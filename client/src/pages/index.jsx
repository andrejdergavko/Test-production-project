import React from 'react';
import { Router } from '@reach/router';

import CampaignsContainer from './campaigns';
import PageContainer from '../components/page-container';

export default () => (
  <PageContainer>
    <Router primary={false}>
      <CampaignsContainer path="/" />
    </Router>
  </PageContainer>
);
