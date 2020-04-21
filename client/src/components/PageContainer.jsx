import React from 'react';
import {styled} from 'baseui';

import Header from './Header';

const Container = styled('div',{
  margin: '40px',
});

export default ({children}) => (
  <div>
    <Header />
    <Container>{children}</Container>
  </div>
);
