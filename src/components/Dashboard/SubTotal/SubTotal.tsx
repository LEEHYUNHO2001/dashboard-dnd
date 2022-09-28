import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

import { useEventQuery } from '@/hooks/query';
import { SubTotalData } from '@/types';

import { Country } from './Country';
import { transformSubTotal } from './helper';

export const SubTotal = () => {
  const { isLoading, isFetching, data } = useEventQuery(4);
  const [subTotalData, setSubTotalData] = useState<SubTotalData[]>();

  useEffect(() => {
    if (data) {
      const rows = data?.data.data.rows;
      const trans = (Object.entries(transformSubTotal(rows)) as SubTotalData[]).sort(
        (a: SubTotalData, b: SubTotalData) => {
          const num1 = typeof a[1] === 'number' ? a[1] : a[1]?.countrySum;
          const num2 = typeof b[1] === 'number' ? b[1] : b[1]?.countrySum;
          return +num2 - +num1;
        }
      );

      setSubTotalData(trans as SubTotalData[]);
    }
  }, [isLoading]);

  if (isLoading || isFetching) return <div>Loading...</div>;

  return (
    <CountryContainer>
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
  );
};

const CountryContainer = styled.ul`
  overflow-y: scroll;
  height: 100%;
`;
