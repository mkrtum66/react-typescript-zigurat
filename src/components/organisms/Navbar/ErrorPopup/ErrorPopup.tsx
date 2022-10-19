import React from 'react';
import {
  Content,
  HiddenText,
  IconWrapper,
  ModalTitle,
  WalletName,
} from '../ConnectPopup/ConnectPopup.styled';
import WalletIcon from '../ConnectPopup/WalletIcon';
import Modal from '../../../atoms/Modal';
import { ConnectPupupProps } from '../ConnectPopup/types';
import MarinaLogo from '../ConnectPopup/MarinaLogo';
import { Footer, Top } from './ErrorPopup.styled';
import Button from '../../../atoms/Button';

const ErrorPopup = ({ isOpen, setIsOpen, isMobile, back }: ConnectPupupProps) => {
  return (
    <Modal
      maskTransitionName={''}
      centered={true}
      title={
        <ModalTitle style={{ color: 'var(--text-header)', fontWeight: 600 }}>
          <WalletIcon /> Connect a Wallet
        </ModalTitle>
      }
      visible={isOpen}
      onCancel={() => {
        setIsOpen(false);
      }}
      footer={false}
      width={isMobile ? 300 : 500}
      wrapClassName={'pay-modal-wrapper'}
      getContainer={false}
    >
      <Content>
        <Top>
          <IconWrapper>
            <MarinaLogo />
          </IconWrapper>
          <WalletName>Marina</WalletName>
        </Top>
        <HiddenText>
          You'll need to install <b>Marina</b> to continue. Once you have it installed, go ahead and{' '}
          <span className={'link'} onClick={() => window.location.reload()}>
            refresh the page
          </span>
          .
        </HiddenText>
        <Footer>
          <Button outlined onClick={back}>
            Back
          </Button>
          <Button
            outlined
            onClick={() =>
              window.open('https://vulpem.com/marina.html', '_blank', 'noopener,noreferrer')
            }
          >
            Open Marina
          </Button>
        </Footer>
      </Content>
    </Modal>
  );
};

export default ErrorPopup;
