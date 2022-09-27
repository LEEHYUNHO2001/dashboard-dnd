import styled from '@emotion/styled';
import React from 'react';

import { GridLayout } from '../GridLayout';

export const Dashboard = () => (
  <Container>
    <GridLayout />
  </Container>
);

const Container = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100vh;
  padding: 0px 100px;
  background-color: #dee2e6;
`;
