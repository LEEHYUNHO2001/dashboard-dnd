import styled from '@emotion/styled';
import Responsive, { WidthProvider } from 'react-grid-layout';

import { Box } from '../Common';
import { SummaryChart, SummaryTotal, SummaryUnique } from '../Dashboard';

const ReactGridLayout = WidthProvider(Responsive);

export const GridLayout = () => {
  const layout = [
    { i: 'unique', x: 0, y: 0, w: 8, h: 2, isResizable: true },
    { i: 'total', x: 8, y: 0, w: 8, h: 2, isResizable: true },
    { i: 'dau', x: 0, y: 2, w: 16, h: 3, isResizable: true },
    { i: 'd', x: 0, y: 5, w: 8, h: 3, isResizable: true },
    { i: 'e', x: 8, y: 5, w: 8, h: 3, isResizable: true },
  ];
  return (
    <Container
      layout={layout}
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
    </Container>
  );
};

const Container = styled(ReactGridLayout)``;
