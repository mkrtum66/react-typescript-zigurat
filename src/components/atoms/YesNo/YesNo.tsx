import { Radio } from 'antd';
import React from 'react';
import { Wrapper } from './YesNo.Styled';

const YesNo = ({ ...props }) => {
  return (
    <Wrapper>
      <Radio.Group {...props} />
    </Wrapper>
  );
};

export default YesNo;
