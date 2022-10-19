import React from 'react';
import type { IButtonProps } from './types';
import { StyledButton } from './Button.styled';

const Button = ({
  children,
  outlined,
  size,
  disabled,
  onClick,
  type,
  dashed,
  style,
}: IButtonProps) => (
  <StyledButton
    type={type}
    outlined={outlined}
    size={size}
    disabled={disabled}
    dashed={dashed}
    onClick={onClick}
    style={style}
  >
    {children}
  </StyledButton>
);

export default Button;
