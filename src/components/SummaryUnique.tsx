import React from 'react';
import { useQuery } from 'react-query';

import { getSummary } from '@/utils/fetcher';

export const SummaryUnique = () => {
  const { isLoading, isFetching, data } = useQuery(['getSummary'], getSummary);

  if (isLoading || isFetching) return <div>Loading...</div>;

  console.log(data);

  return <div>SummaryUnique</div>;
};
