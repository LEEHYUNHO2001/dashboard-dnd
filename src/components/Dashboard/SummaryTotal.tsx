import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { SummaryData } from '@/types';
import { summaryIdx, summarySum } from '@/utils';

import { Summary } from '../Common';

export const SummaryTotal = () => {
  const summary = useSelector(({ summaryData }: SummaryData) => summaryData || {}, shallowEqual);
  const [total, setTotal] = useState({ totalSum: 0, previous: 0 });

  useEffect(() => {
    const idx = summaryIdx(summary?.headers, 'page_view');
    const totalSum = summarySum(summary?.rows, idx);
    const previous = parseInt(summary?.rows[0][2]) - parseInt(summary?.rows[1][2]);
    setTotal({ totalSum, previous });
  }, []);

  return <Summary data={total} />;
};
