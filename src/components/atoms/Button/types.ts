import { ReactNode, CSSProperties } from 'react';

export type ButtonStyledProps = {
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  outlined?: boolean;
  dashed?: boolean;
};

export interface IButtonProps extends ButtonStyledProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  style?: CSSProperties;
}
