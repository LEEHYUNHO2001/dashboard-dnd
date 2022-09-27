import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { SummaryData } from '@/types';
import { summaryIdx, summarySum } from '@/utils';

import { Summary } from '../Common';

export const SummaryUnique = () => {
  const summary = useSelector(({ summaryData }: SummaryData) => summaryData || {}, shallowEqual);
  const [unique, setUnique] = useState({ uniqueSum: 0, previous: 0 });

  useEffect(() => {
    const idx = summaryIdx(summary?.headers, 'unique_view');
    const uniqueSum = summarySum(summary?.rows, idx);
    const previous = parseInt(summary?.rows[0][1]) - parseInt(summary?.rows[1][1]);
    setUnique({ uniqueSum, previous });
  }, []);

  return <Summary data={unique} />;
};
