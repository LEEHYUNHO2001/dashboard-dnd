import { useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { SummaryData } from '@/types';
import { summaryIdx, summarySum } from '@/utils';

export const SummaryUnique = () => {
  const summary = useSelector(({ summaryData }: SummaryData) => summaryData || {}, shallowEqual);

  useEffect(() => {
    const idx = summaryIdx(summary?.headers, 'unique_view');
    const uniqueSum = summarySum(summary.rows, idx);
    console.log(uniqueSum);
  }, []);

  return <div>SummaryUnique</div>;
};
