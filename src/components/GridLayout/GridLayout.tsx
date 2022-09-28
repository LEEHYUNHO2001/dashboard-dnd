import styled from '@emotion/styled';
import { useState } from 'react';
import Responsive, { WidthProvider } from 'react-grid-layout';

import { gridLayout } from '@/constants';
import { GridLayoutType } from '@/types';

import { Box } from '../Common';
import { Referral, SubTotal, SummaryChart, SummaryTotal, SummaryUnique } from '../Dashboard';
import { getStorage, setStorage } from './helper';

const ReactGridLayout = WidthProvider(Responsive);

export const GridLayout = () => {
  const [layout, setLayout] = useState<GridLayoutType[]>(getStorage('layout') || gridLayout);

  const onLayoutChange = (layout: GridLayoutType[]) => {
    setStorage('layout', layout);
    setLayout(layout);
  };

  return (
    <Container
      layout={layout}
      onLayoutChange={onLayoutChange}
      cols={16}
      rowHeight={100}
      maxRows={9}
      isDraggable
      isResizable
      width={800}
    >
      <div key="unique">
        <Box title="접속유저">
          <SummaryUnique />
        </Box>
      </div>
      <div key="total">
        <Box title="접속횟수">
          <SummaryTotal />
        </Box>
      </div>
      <div key="dau">
        <Box title="DAU">
          <SummaryChart />
        </Box>
      </div>
      <div key="referral">
        <Box title="Top Referral">
          <Referral />
        </Box>
      </div>
      <div key="subtotal">
        <Box title="Top Referral">
          <SubTotal />
        </Box>
      </div>
    </Container>
  );
};

const Container = styled(ReactGridLayout)``;
