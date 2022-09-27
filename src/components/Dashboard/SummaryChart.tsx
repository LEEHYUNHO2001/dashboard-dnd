import { useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import {
  Area,
  AreaChart,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { SummaryData } from '@/types';

interface Obj {
  name: string;
  unique: number;
  total: number;
}

export const SummaryChart = () => {
  const summary = useSelector(({ summaryData }: SummaryData) => summaryData || {}, shallowEqual);
  const [data, setData] = useState<Obj[]>();

  const trnasform = () => {
    const obj: Obj[] = [];
    summary.rows.forEach(row => {
      const trans = { name: row[0], unique: parseInt(row[1]), total: parseInt(row[2]) };
      obj.push(trans);
    });
    setData(obj);
  };

  useEffect(() => {
    trnasform();
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height="10%">
        <AreaChart
          width={500}
          height={50}
          data={data}
          margin={{
            top: 10,
            right: 100,
            left: 100,
            bottom: 0,
          }}
        >
          <Tooltip />
          <Area dataKey="total" fill="#f6f8fc" />
        </AreaChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data?.slice(0, 30).reverse()}
          margin={{
            top: 40,
            right: 40,
            bottom: 30,
            left: 40,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" fontSize={12} />
          <YAxis
            yAxisId="right"
            orientation="right"
            ticks={[0, 100, 200, 300, 400, 500, 600, 700]}
            fontSize={12}
          />
          <YAxis yAxisId="left" ticks={[0, 3000, 6000, 9000, 12000, 15000, 18000]} fontSize={12} />
          <Tooltip />
          <Legend />
          <Line dataKey="unique" yAxisId="right" name="Unique Event Count" stroke="#7fbcb3" />
          <Bar
            dataKey="total"
            yAxisId="left"
            name="Total Event Count"
            barSize={10}
            fill="#22c3aa"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};
