import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

import { useEventQuery } from '@/hooks/query';

import { transformSubTotal } from './helper';

type SubTotalData = [string, { [key: string]: object } | number];

export const SubTotal = () => {
  const { isLoading, isFetching, data } = useEventQuery(4);
  const [subTotalData, setSubTotalData] = useState<SubTotalData[]>();

  useEffect(() => {
    if (data) {
      const rows = data?.data.data.rows;
      const trnas = Object.entries(transformSubTotal(rows));
      setSubTotalData(trnas as SubTotalData[]);
    }
  }, [isLoading]);

  if (isLoading || isFetching) return <div>Loading...</div>;

  console.log(subTotalData);

  return (
    <CountryContainer>
      {subTotalData?.map(data => {
        const [country, rest] = data;
        const isEct = typeof rest === 'number';
        const countrySum = isEct ? rest : rest.countrySum;
        const countryCount = !isEct && rest.countryCount;

        return (
          <ITemContainer key={`subTotalData-${country}-${countrySum}`}>
            <ItemTitlt>{`${country} (${countryCount})`}</ItemTitlt>
            <ItemSum>{countrySum as number}</ItemSum>
          </ITemContainer>
        );
      })}
    </CountryContainer>
  );
};

const CountryContainer = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;
const ITemContainer = styled.li`
  display: flex;
  border-top: 1px solid #e4e4e4;
`;
const ItemTitlt = styled.p`
  display: flex;
  align-items: center;
  flex: 1;
  height: 40px;
`;
const ItemSum = styled.p`
  display: flex;
  align-items: center;
  flex: 1.3;
  border-left: 1px solid #e4e4e4;
  height: 40px;
  padding-left: 20px;
`;
