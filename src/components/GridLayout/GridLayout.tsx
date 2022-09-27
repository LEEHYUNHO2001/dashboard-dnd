import styled from '@emotion/styled';
import Responsive, { WidthProvider } from 'react-grid-layout';

const ReactGridLayout = WidthProvider(Responsive);

export const GridLayout = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 8, h: 2, isResizable: true },
    { i: 'b', x: 8, y: 0, w: 8, h: 2, isResizable: true },
    { i: 'c', x: 0, y: 2, w: 16, h: 3, isResizable: true },
    { i: 'd', x: 0, y: 5, w: 8, h: 3, isResizable: true },
    { i: 'e', x: 8, y: 5, w: 8, h: 3, isResizable: true },
  ];
  return (
    <Container>
      <ReactGridLayout
        layout={layout}
        cols={16}
        rowHeight={100}
        maxRows={9}
        isDraggable
        isResizable
        width={800}
      >
        {layout.map(item => (
          <Item key={item.i}>
            <Title>{item.i}</Title>
          </Item>
        ))}
      </ReactGridLayout>
    </Container>
  );
};

const Container = styled.div``;
const Item = styled.div`
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
const Title = styled.h2`
  color: #298ee7;
  font-weight: 700;
`;
