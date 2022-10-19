import React, { useContext, useState } from 'react';

import WalletIcon from './WalletIcon';
import Modal from '../../../atoms/Modal';

import { ConnectPupupProps } from './types';
import {
  Content,
  HiddenText,
  IconWrapper,
  ModalTitle,
  Quest,
  WalletButton,
  WalletName,
} from './ConnectPopup.styled';
import MarinaLogo from './MarinaLogo';
import ThemeContext from '../../../../context/ThemeContext';

const ConnectPopup = ({ isOpen, setIsOpen, isMobile, onSelect, loader }: ConnectPupupProps) => {
  const [showText, setShowText] = useState(false);
  const theme = useContext(ThemeContext);

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
        <WalletButton onClick={onSelect} isDark={theme === 'dark'}>
          <IconWrapper>
            <MarinaLogo />
          </IconWrapper>
          <WalletName>Marina</WalletName>
        </WalletButton>
        <Quest onClick={() => setShowText(!showText)}>What is Wallet?</Quest>
        {showText ? (
          <HiddenText>
            Wallets are used to send, receive, and store digital assets like Ether. Wallets come in
            many forms. They are either built into your browser, an extension added to your browser,
            a piece of hardware plugged into your computer or even an app on your phone. For more
            information about wallets, see{' '}
            <a
              href="https://docs.ethhub.io/using-ethereum/wallets/intro-to-ethereum-wallets/"
              target="_blank"
              rel="noreferrer"
            >
              this explanation
            </a>
            .
          </HiddenText>
        ) : (
          ''
        )}
        {loader}
      </Content>
    </Modal>
  );
};

export default ConnectPopup;
