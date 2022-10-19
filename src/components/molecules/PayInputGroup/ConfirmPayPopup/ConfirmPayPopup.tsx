import React from 'react';
import Modal from '../../../atoms/Modal';
import { ConfirmPayPopupWrapper } from './ConfirmPayPopup.styled';
import useMobile from '../../../../hooks/Mobile';
import { IPopupProps } from '../types';

const ConfirmPayPopup = ({ isOpen, setIsOpen, closeModal }: IPopupProps) => {
  const mobile = useMobile();
  return (
    <ConfirmPayPopupWrapper>
      <Modal
        maskTransitionName={''}
        centered={true}
        title={'Heads up'}
        visible={isOpen}
        onCancel={() => {
          setIsOpen(false);
        }}
        cancelButtonProps={{ style: { display: 'none' } }}
        wrapClassName={'confirm-pay-modal-wrapper'}
        getContainer={false}
        okText={'I Understand'}
        width={mobile ? 300 : 400}
        onOk={closeModal}
      >
        <span>
          <a href="/">Zigurat contracts</a> are unaudited, and may be vulnerable to bugs or hacks.
          All funds moved through Juicebox could be lost or stolen. JuiceboxDAO and Peel are not
          liable for any losses by projects or their supporters.
        </span>
      </Modal>
    </ConfirmPayPopupWrapper>
  );
};

export default ConfirmPayPopup;
