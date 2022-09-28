import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

import { useEventQuery } from '@/hooks/query';
import { SubTotalData } from '@/types';

import { SubTotalProvider } from './Context';
import { Country } from './Country';
import { transformSubTotal } from './helper';

interface SortStyled {
  sortNum: number;
}

export const SubTotal = () => {
  const { isLoading, isFetching, data } = useEventQuery(4);
  const [sortNum, setSortNum] = useState(1);
  const [subTotalData, setSubTotalData] = useState<SubTotalData[]>();

  const handleSortNum = () => {
    setSortNum(prev => prev * -1);
  };

  useEffect(() => {
    if (data) {
      const rows = data?.data.data.rows;
      const trans = (Object.entries(transformSubTotal(rows)) as SubTotalData[]).sort(
        (a: SubTotalData, b: SubTotalData) => {
          const num1 = typeof a[1] === 'number' ? a[1] : a[1]?.countrySum;
          const num2 = typeof b[1] === 'number' ? b[1] : b[1]?.countrySum;
          return (+num2 - +num1) * sortNum;
        }
      );

      setSubTotalData(trans as SubTotalData[]);
    }
  }, [isLoading, sortNum]);

  if (isLoading || isFetching) return <div>Loading...</div>;

  return (
    <SubTotalProvider sortNum={sortNum}>
      <CountryContainer>
        <div>
          <TextContainer>
            <Fir>GroupBy</Fir>
            <Sec>Metrics</Sec>
          </TextContainer>
          <TextContainer>
            <Fir>
              Country (IP) {'>'} Region (IP) {'>'} City (IP)
            </Fir>
            <Sort sortNum={sortNum} onClick={handleSortNum}>
              Sum (Unique Event Count)
            </Sort>
          </TextContainer>
        </div>
        {subTotalData?.map(data => {
          const [country, rest] = data;
          const isEct = typeof rest === 'number';
          const countrySum = isEct ? rest : rest.countrySum;
          const countryCount = isEct ? 0 : rest.countryCount;

          return (
            <Country
              key={`subTotalData-${country}-${countrySum}`}
              country={country}
              rest={rest}
              countrySum={countrySum as number}
              countryCount={countryCount as number}
            />
          );
        })}
      </CountryContainer>
    </SubTotalProvider>
  );
};

const CountryContainer = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;
const TextContainer = styled.div`
  display: flex;
  flex: 1.3;
  border-bottom: 1px solid #e4e4e4;
`;
const Fir = styled.p`
  display: flex;
  align-items: center;
  flex: 1;
  height: 40px;
  min-width: 300px;
  font-size: 14px;
  border-right: 1px solid #e4e4e4;
`;
const Sec = styled.p`
  display: flex;
  align-items: center;
  flex: 1.3;
  padding-left: 20px;
  height: 40px;
  font-size: 14px;
`;
const Sort = styled.p<SortStyled>`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1.3;
  padding-left: 20px;
  height: 40px;
  font-size: 14px;

  &::before {
    ${({ sortNum }) => (sortNum === 1 ? `content: '↓';` : `content: '↑';`)}
    position: absolute;
    top: 10px;
    right: 30px;
  }
`;
