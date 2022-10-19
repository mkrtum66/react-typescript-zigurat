import React from 'react';
import { PaymentsWrapper } from './Payments.styled';
import Payment from '../../atoms/Payment';
import { TrendProps } from '../../atoms/TrendingItem/types';
import { v4 as uuid } from 'uuid';

const Payments = ({ payments }: { payments: TrendProps[] }) => {
  return (
    <PaymentsWrapper>
      {payments.map(item => (
        <Payment deposit={item.activity.deposits} key={uuid()} handle={item.handle} />
      ))}
    </PaymentsWrapper>
  );
};

export default Payments;
