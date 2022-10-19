import React from 'react';
import FirstCardForm from './FirstCardForm';
import SecondCardForm from './SecondCardForm';
import ThirdCardForm from './ThirdCardForm';

const Forms = ({ id }: { id: number }) => {
  return (
    <div>
      {id === 1 ? <FirstCardForm /> : ''}
      {id === 2 ? <SecondCardForm /> : ''}
      {id === 3 ? <ThirdCardForm /> : ''}
    </div>
  );
};

export default Forms;
