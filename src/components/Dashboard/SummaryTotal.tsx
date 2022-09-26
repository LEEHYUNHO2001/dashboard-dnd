import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { SummaryData } from '@/types';
import { summaryIdx, summarySum } from '@/utils';

export const SummaryTotal = () => {
  const summary = useSelector(({ summaryData }: SummaryData) => summaryData || {}, shallowEqual);
  const [total, setTotal] = useState({ TotalSum: 0, previous: 0 });

  useEffect(() => {
    const idx = summaryIdx(summary?.headers, 'page_view');
    const TotalSum = summarySum(summary?.rows, idx);
    const previous = parseInt(summary?.rows[0][2]) - parseInt(summary?.rows[1][2]);
    setTotal({ TotalSum, previous });
  }, []);

  return (
    <article>
      <p>{total.TotalSum}</p>
      <p>{total.previous}</p>
    </article>
  );
};
