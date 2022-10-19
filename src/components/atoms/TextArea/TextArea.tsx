import React from 'react';
import { StyledTextArea } from './TextArea.styled';

const TextArea = ({ ...props }) => {
  return (
    <div>
      <StyledTextArea {...props} />
    </div>
  );
};

export default TextArea;
