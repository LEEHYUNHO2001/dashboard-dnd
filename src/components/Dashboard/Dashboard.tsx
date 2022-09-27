import styled from '@emotion/styled';
import React from 'react';

import { GridLayout } from '../GridLayout';

export const Dashboard = () => (
  <Container>
    {/* <SummaryUnique />
    <SummaryTotal /> */}
    <GridLayout />
  </Container>
);

const Container = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100vh;
  background-color: #dee2e6;
`;
