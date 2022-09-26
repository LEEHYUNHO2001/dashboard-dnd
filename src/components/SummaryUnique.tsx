import React from 'react';

import { useEventQuery } from '@/hooks/query';

export const SummaryUnique = () => {
  const { isLoading, isFetching, data } = useEventQuery(1);

  if (isLoading || isFetching) return <div>Loading...</div>;

  console.log(data);

  return <div>SummaryUnique</div>;
};
