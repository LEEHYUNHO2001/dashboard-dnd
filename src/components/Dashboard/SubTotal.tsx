import React from 'react';

import { useEventQuery } from '@/hooks/query';

export const SubTotal = () => {
  const { isLoading, isFetching, data: xlsx } = useEventQuery(4);

  if (isLoading || isFetching) return <div>Loading...</div>;

  console.log(xlsx?.data.data);

  return <div>Xlsx</div>;
};
