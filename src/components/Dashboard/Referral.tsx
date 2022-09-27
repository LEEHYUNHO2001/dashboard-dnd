import React, { useEffect, useState } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { useEventQuery } from '@/hooks/query';
import { summarySum } from '@/utils';

interface Refferal {
  headers: {
    idx: number;
    key: string;
  }[];
  rows: string[][];
}

interface TopAndRest {
  name: string;
  count: number;
}

const COLORS = ['#4ea397', '#22c3aa', '#7bd9a5', '#d0648a', '#f58db2'];

export const Referral = () => {
  const [topAndRest, setTopAndRest] = useState<TopAndRest[]>([]);
  const { isLoading, isFetching, data } = useEventQuery(3);

  useEffect(() => {
    if (data) {
      const refferal: Refferal = { ...data?.data.data };
      const sortRows = refferal.rows?.sort((a: string[], b: string[]) => +b[1] - +a[1]);
      const restSum = summarySum(sortRows.slice(4), 1);
      const transform = sortRows
        .slice(0, 4)
        .map(row => ({ name: row[0], count: parseInt(row[1]) }));
      transform.push({ name: 'ect', count: restSum });
      setTopAndRest(transform);
    }
  }, [isLoading]);

  if (isLoading || isFetching) return <div>Loading...</div>;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="count"
          startAngle={360}
          endAngle={0}
          data={topAndRest}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
          fontSize={12}
        >
          {topAndRest.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend iconSize={10} />
      </PieChart>
    </ResponsiveContainer>
  );
};
