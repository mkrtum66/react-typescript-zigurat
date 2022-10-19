import React from 'react';
import { StyledSwitch } from './Switcher.styled';

const Switcher = ({ ...props }) => {
  return (
    <div>
      <StyledSwitch {...props} />
    </div>
  );
};

export default Switcher;
