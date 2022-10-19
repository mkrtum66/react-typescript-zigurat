import { ReactNode } from 'react';

export type NavProps = {
  children: ReactNode;
  to: string;
  className?: string;
  key?: string;
  onClick?: (value: any) => void;
};
