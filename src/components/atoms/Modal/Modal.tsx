import React from 'react';
import { StyledModal } from './Modal.styled';

const Modal = ({ ...props }) => {
  return (
    <div>
      <StyledModal {...props}>{props.children}</StyledModal>
    </div>
  );
};

export default Modal;
