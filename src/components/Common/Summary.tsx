import styled from '@emotion/styled';

import { color } from '@/constants';

interface Props {
  data: {
    uniqueSum?: number;
    totalSum?: number;
    previous: number;
  };
}

export const Summary = ({ data }: Props) => {
  const count = data.uniqueSum ? data.uniqueSum.toLocaleString() : data.totalSum?.toLocaleString();
  const title = data.uniqueSum ? 'Unique Event Count' : 'Total Event Count';

  return (
    <Container>
      <TitleContainer>
        <SumText>SUM</SumText>
        <Title>{title}</Title>
      </TitleContainer>
      <Count>{count}</Count>
      <Previous>
        <Img src="/icons/arrow_bottom.svg" alt="arrow_bottom" />
        {data.previous}
      </Previous>
    </Container>
  );
};

const Container = styled.article`
  margin-top: 10px;
`;
const TitleContainer = styled.h3`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 12px;
  color: #5e5e5f;
`;
const SumText = styled.p`
  padding: 3px;
  font-weight: 600;
  background-color: #f3f4f5;
`;
const Title = styled.p`
  margin-left: 10px;
`;
const Count = styled.p`
  margin: 20px 0px;
  font-size: 36px;
  font-weight: 700;
`;
const Previous = styled.p`
  margin-top: 30px;
  color: ${color.BLUE};
`;
const Img = styled.img`
  width: 5px;
  margin-right: 10px;
`;
