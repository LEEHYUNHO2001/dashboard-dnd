import styled from '@emotion/styled';

interface Props {
  title: string;
  sum: number;
  count?: number;
  buttonLeft?: number;
  click?: boolean;
  handleClick?: () => void;
  titleLeft?: number;
}

interface BtnStyled {
  click: boolean;
  buttonLeft?: number;
}

interface TitleStyled {
  titleLeft?: number;
}

export const ItemList = ({
  title,
  sum,
  count,
  buttonLeft,
  click = false,
  handleClick,
  titleLeft,
}: Props) => (
  <ITemContainer>
    <ItemTitltContainer>
      {count !== 0 && (
        <Btn onClick={handleClick} click={click} buttonLeft={buttonLeft}>
          {'>'}
        </Btn>
      )}
      <Title titleLeft={titleLeft}>{title}</Title>
      {count !== 0 && <p>({count})</p>}
    </ItemTitltContainer>
    <ItemSum>{sum}</ItemSum>
  </ITemContainer>
);

const ITemContainer = styled.div`
  display: flex;
  border-top: 1px solid #e4e4e4;
  color: #93969a;
`;
const ItemTitltContainer = styled.p`
  display: flex;
  align-items: center;
  flex: 1;
  height: 40px;
  min-width: 300px;
`;
const Btn = styled.p<BtnStyled>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  margin-left: ${({ buttonLeft }) => `${buttonLeft}`}px;
  color: #ffffff;
  background-color: ${({ click }) => (click ? '#343a40' : '#ced4da')};
  ${({ click }) => click && 'transform: rotate(90deg);-webkit-transform:rotate(90deg);'}
  border-radius: 50%;
`;
const Title = styled.p<TitleStyled>`
  margin: 0px 10px 0px ${({ titleLeft }) => (titleLeft ? `${titleLeft}px` : '10px')};
`;
const ItemSum = styled.p`
  display: flex;
  align-items: center;
  flex: 1.3;
  border-left: 1px solid #e4e4e4;
  height: 40px;
  padding-left: 20px;
`;
