import React from 'react';
import {styled} from 'baseui';

import Header from './Header';

const Container = styled('div',{
  margin: '20px',
});

export default ({children}) => (
  <div>
    <Header />
    <Container>{children}</Container>
  </div>
);
