import React, { useEffect, useState } from 'react';

import { useEventQuery } from '@/hooks/query';

import { transformSubTotal } from './helper';

export const SubTotal = () => {
  const { isLoading, isFetching, data } = useEventQuery(4);
  const [subTotalData, setSubTotalData] = useState();

  useEffect(() => {
    if (data) {
      const rows = data?.data.data.rows;
      setSubTotalData(transformSubTotal(rows));
    }
  }, [isLoading]);

  if (isLoading || isFetching) return <div>Loading...</div>;

  console.log(subTotalData);

  return <div>Xlsx</div>;
};
