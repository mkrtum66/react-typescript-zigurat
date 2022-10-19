import { ReactNode } from 'react';

export type ConnectPupupProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isMobile: boolean;
  onSelect?: () => void;
  back?: () => void;
  loader?: ReactNode;
};
