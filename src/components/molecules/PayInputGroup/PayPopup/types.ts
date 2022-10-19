import { ProjectProps } from '../../../../utils/models/project/projectState';

export interface IPayPopupProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  closeModal: () => void;
  currentTrand: ProjectProps;
  payValue: number | undefined;
  tokens: number;
  setConnectWalletPopup: (value: boolean) => void;
}
