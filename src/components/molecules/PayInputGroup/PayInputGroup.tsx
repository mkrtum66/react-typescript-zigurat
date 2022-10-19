import React, { useContext, useState } from 'react';
import {
  Input,
  InputBottomInfo,
  InputWrapper,
  PayBtn,
  PayInputWrapper,
  Row,
  Toggle,
} from './PayInputGroup.styled';
import { StyledTooltip } from '../../pages/currentTrendingProject/CurrentTranding.styled';
import ThemeContext from '../../../context/ThemeContext';
import Button from '../../atoms/Button';
import ConfirmPayPopup from './ConfirmPayPopup';
import PayPopup from './PayPopup';
import ErrorPopup from '../../organisms/Navbar/ErrorPopup';
import useMobile from '../../../hooks/Mobile';
import { ProjectProps } from '../../../utils/models/project/projectState';

const PayInputGroup = ({ currentTrend }: { currentTrend: ProjectProps }) => {
  const theme = useContext(ThemeContext);
  const isMobile = useMobile();
  const [type] = useState(currentTrend.details.perkRateBase);
  const [payValue, setPayValue] = useState<number | undefined>(0);
  const [isDisabledPayBtn] = useState(false);
  const [firstModalVisible, setFirstModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [extensionError, setExtensionError] = useState(false);
  let tokens = (Number(payValue) * currentTrend.details.rate) / currentTrend.details.perkRate;
  let perkForBTC = Number(payValue) * (currentTrend.details.perkRate / currentTrend.details.rate);
  const dividsible = currentTrend.details.dividsible;

  const invalidChars = ['-', '+', 'e'];

  const onHandleChange = (val: string | number | null | undefined) => {
    const newVal = (typeof val === 'string' ? parseFloat(val) : val) ?? undefined;
    setPayValue(newVal);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };
  const closeConfirmPayModal = () => {
    setFirstModalVisible(false);
    setSecondModalVisible(true);
  };
  const closePayModal = () => {
    setSecondModalVisible(false);
  };
  const openConfirmPayModal = () => {
    if (payValue) {
      setFirstModalVisible(true);
    }
  };

  const calculation = (
    type: string,
    inputValue: number | undefined,
    tokens: number,
    dividsible: boolean,
  ) => {
    if (type === currentTrend.details.rateType.btc) {
      if (!dividsible) {
        return (
          <p>
            Receive{' '}
            {!inputValue ? currentTrend.details.rate / currentTrend.details.perkRate : tokens}{' '}
            {currentTrend.details.perk}
            {!inputValue ? `/1${type}` : ''}
          </p>
        );
      } else {
        return (
          <p>
            Receive{' '}
            {!inputValue
              ? currentTrend.details.rate / currentTrend.details.perkRate
              : tokens.toFixed(8)}{' '}
            {currentTrend.details.perk}
            {!inputValue ? `/1${type}` : ''}
          </p>
        );
      }
    } else if (type === currentTrend.details.rateType.usd) {
      if (!dividsible) {
        return (
          <p>
            Receive {!inputValue ? '1' : payValue} {currentTrend.details.perk}
            {!inputValue ? `/25${type}` : ` for ${perkForBTC} BTC`}
          </p>
        );
      } else {
        return (
          <p>
            Receive {!inputValue ? '0.04' : (Number(payValue) * 0.04).toFixed(8)}{' '}
            {currentTrend.handle}
            {!inputValue ? `/1${type}` : ''}
          </p>
        );
      }
    }
  };

  return (
    <>
      <PayInputWrapper>
        <Row>
          <InputWrapper>
            <Input
              type={'number'}
              placeholder={`0`}
              size={'small'}
              // formatter={val => `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(val?: string) => parseFloat(val ?? '0')}
              onChange={onHandleChange}
              onKeyDown={onKeyDown}
            />
            <Toggle>
              <span>PLANT</span>
            </Toggle>
          </InputWrapper>

          <StyledTooltip
            title={isDisabledPayBtn ? 'Payments are paused for the current funding cycle.' : null}
            color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
            getPopupContainer={trigger => trigger.parentElement as HTMLElement}
          >
            <PayBtn>
              <Button
                style={{ width: '100%' }}
                disabled={isDisabledPayBtn}
                onClick={openConfirmPayModal}
              >
                Pay
              </Button>
            </PayBtn>
          </StyledTooltip>
        </Row>
        <InputBottomInfo>{calculation(type, payValue, tokens, dividsible)}</InputBottomInfo>
        <ConfirmPayPopup
          isOpen={firstModalVisible}
          setIsOpen={setFirstModalVisible}
          closeModal={closeConfirmPayModal}
        />
        <PayPopup
          isOpen={secondModalVisible}
          setIsOpen={setSecondModalVisible}
          closeModal={closePayModal}
          payValue={perkForBTC}
          tokens={payValue || 0}
          currentTrand={currentTrend}
          setConnectWalletPopup={setExtensionError}
        />
        <ErrorPopup
          isOpen={extensionError}
          setIsOpen={setExtensionError}
          isMobile={isMobile}
          back={() => {
            setExtensionError(false);
          }}
        />
      </PayInputWrapper>
    </>
  );
};

export default PayInputGroup;
