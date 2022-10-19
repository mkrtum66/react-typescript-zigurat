import React from 'react';
import { v4 as uuid } from 'uuid';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { IRechartData } from './types';

const Rechart = ({ data }: { data: IRechartData[] }) => {
  const rechartData = data.map(item => ({
    network: item.network,
    currency: item.currency,
    txid: item.txid,
    timestamp: `${new Date(+item.timestamp).toLocaleString('en-US', { month: 'short' })}`,
    amount: item.amount,
  }));

  return (
    <div>
      <ResponsiveContainer width={'100%'} height={250}>
        <LineChart data={rechartData}>
          <Line
              key={uuid()}
              type="monotone"
              dataKey="amount"
              activeDot={false}
              stroke={'#f5a312'}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={'timestamp'} />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
