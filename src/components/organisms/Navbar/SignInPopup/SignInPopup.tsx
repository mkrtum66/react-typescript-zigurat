import React from 'react';
import { Content, HiddenText, ModalTitle } from '../ConnectPopup/ConnectPopup.styled';
import WalletIcon from '../ConnectPopup/WalletIcon';
import Modal from '../../../atoms/Modal';
import { ConnectPupupProps } from '../ConnectPopup/types';
import Button from '../../../atoms/Button';
import { Footer } from '../ErrorPopup/ErrorPopup.styled';

const SignInPopup = ({ isOpen, setIsOpen, isMobile }: ConnectPupupProps) => {
  return (
    <Modal
      maskTransitionName={''}
      centered={true}
      title={
        <ModalTitle style={{ color: 'var(--text-header)', fontWeight: 600, fontSize: '18px' }}>
          <WalletIcon /> Login and Authorize Your Wallet
        </ModalTitle>
      }
      visible={isOpen}
      onCancel={() => {
        setIsOpen(false);
      }}
      footer={false}
      width={isMobile ? 320 : 500}
      wrapClassName={'pay-modal-wrapper'}
      getContainer={false}
    >
      <Content>
        <HiddenText>
          This dapp requires access to your wallet, please login and authorize access to your
          MetaMask accounts to continue.
        </HiddenText>
        <Footer>
          <Button outlined onClick={() => setIsOpen(false)}>
            Dismiss
          </Button>
        </Footer>
      </Content>
    </Modal>
  );
};

export default SignInPopup;
