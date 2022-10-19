import React from 'react';
import QRCode from 'react-qr-code';
import Modal from '../../../atoms/Modal';
import useMobile from '../../../../hooks/Mobile';
import { IPopupProps } from '../types';
import { QrPopupWrapper, QrWrapper } from './QrPopup.styled';

const QrPopup = ({ isOpen, setIsOpen, closeModal }: IPopupProps) => {
  const mobile = useMobile();
  return (
    <QrPopupWrapper>
      <Modal
        maskTransitionName={''}
        centered={true}
        title={'Scan Qr'}
        visible={isOpen}
        onCancel={() => {
          setIsOpen(false);
        }}
        // cancelButtonProps={{ style: { display: 'none' } }}
        wrapClassName={'qr-modal-wrapper'}
        getContainer={false}
        footer={false}
        width={mobile ? 300 : 400}
        onOk={closeModal}
      >
        <QrWrapper>
          <QRCode value="hey" level={'H'} title="asdasdas" />
        </QrWrapper>
      </Modal>
    </QrPopupWrapper>
  );
};

export default QrPopup;
