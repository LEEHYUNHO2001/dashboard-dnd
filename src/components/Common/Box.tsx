import styled from '@emotion/styled';

import { color } from '@/constants';

interface Props {
  title: string;
  children: JSX.Element;
}

export const Box = ({ title, children }: Props) => (
  <Item>
    <Title>{title}</Title>
    {children}
  </Item>
);

const Item = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const Title = styled.h2`
  color: ${color.BLUE};
  font-weight: 700;
`;
