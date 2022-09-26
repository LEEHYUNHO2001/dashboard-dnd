import { shallowEqual, useSelector } from 'react-redux';

import { SummaryData } from '@/types';

export const SummaryUnique = () => {
  const summary = useSelector(({ summaryData }: SummaryData) => summaryData || {}, shallowEqual);

  console.log(summary);

  return <div>SummaryUnique</div>;
};
