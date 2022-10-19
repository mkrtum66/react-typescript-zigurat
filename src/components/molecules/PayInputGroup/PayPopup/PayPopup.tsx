import React, { useEffect, useState } from 'react';
import Modal from '../../../atoms/Modal';
import { Description, PayPopupWrapper, Risk, TextGray, ModalFooter } from './PayPopup.styled';
import { IPayPopupProps } from './types';
import { detectProvider } from 'marina-provider';
import { useDispatch, useSelector } from 'react-redux';
import { IWalletData } from '../../../atoms/LoggedInUser/types';
import { setWalletData, setWalletEnable } from '../../../../redux/actions/walletAction';
import Button from '../../../atoms/Button';
import axios from 'axios';
import { setInvoices } from '../../../../redux/actions/invoicesAction';
import { useNavigate } from 'react-router-dom';
import { IGlobalState } from '../../../../utils/models/globalState';

const PayPopup = ({
  isOpen,
  setIsOpen,
  currentTrand,
  payValue,
  tokens,
  setConnectWalletPopup,
}: IPayPopupProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeId = process.env.REACT_APP_MARINA_STROE_ID;
  const authToken = process.env.REACT_APP_AUTHORIZATION_TOKEN;
  const walletData: IWalletData = useSelector((state: IGlobalState) => state.wallet);
  const [isConnected, setIsConnected] = useState(!!walletData.data.address);

  useEffect(() => {
    if (!!walletData.data.address) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [walletData]);

  const connectMarina = async () => {
    try {
      const marina = await detectProvider('marina');
      const enabled = await marina.isEnabled();
      if (!enabled) {
        await marina.enable();
        dispatch(setWalletEnable(true));
      }
      const data = await marina.signMessage('Welcome Back!');
      dispatch(setWalletData(data));
    } catch (err) {
      setConnectWalletPopup(true);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const postData = {
      metadata: {
        walletAddress:
        walletData.data.address,
      },
      checkout: {
        paymentMethods: ['BTC'],
        defaultPaymentMethod: 'BTC',
        expirationMinutes: 60,
        monitoringMinutes: 60,
        paymentTolerance: 0,
        redirectURL: 'https://zigurat.io',
        redirectAutomatically: true,
        requiresRefundEmail: false,
        defaultLanguage: 'EN',
      },
      amount: `${payValue}`,
      currency: 'BTC',
    };

    const response = await axios({
      method: 'post',
      url: `https://pay.onlyanons.com/api/v1/stores/${storeId}/invoices`,
      data: postData,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Authorization: `token ${authToken}`,
      },
    });

    if (response.status === 200) {
      const data = await response.data;
      window.open(data.checkoutLink, '_blank');
      dispatch(
        setInvoices({
          ...data,
          count: tokens,
          token: { name: currentTrand.details.perk, handle: currentTrand.handle },
        }),
      );
      navigate('/pending');
    }
  };

  return (
    <PayPopupWrapper>
      <Modal
        maskTransitionName={''}
        centered={true}
        title={`Pay ${currentTrand.name}`}
        visible={isOpen}
        onCancel={() => {
          setIsOpen(false);
        }}
        width={640}
        wrapClassName={'pay-modal-wrapper'}
        getContainer={false}
        footer={null}
      >
        <Description>
          Paying <b> {currentTrand.name}</b> is not an investment — it's a way to support the
          project. Any value or utility of the tokens you receive is determined by{' '}
          {currentTrand.name}.
        </Description>

        <div>
          <h4>Notice from {currentTrand.name}:</h4>
          <TextGray>{currentTrand.description}</TextGray>
        </div>

        <Risk>
          <h4>
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="exclamation-circle"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
              <path d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z" />
            </svg>
            &nbsp;Potential risks
          </h4>
          <TextGray>
            Some properties of the project's current funding cycle may indicate risk for
            contributors.
          </TextGray>
          <ul>
            <li>
              The project owner may reconfigure this funding cycle at any time, without notice.
            </li>
          </ul>
        </Risk>
        <table>
          <thead>
            <tr>
              <th>Pay amount</th>
              <th>{payValue}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BTC Tokens for you</td>
              <td>{tokens}</td>
            </tr>
          </tbody>
        </table>
        <ModalFooter>
          <Button outlined onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          {isConnected ? (
            <form className="btcpay-form btcpay-form--block" onSubmit={handleSubmit}>
              <input type="hidden" name="storeId" value={storeId} />
              <input type="hidden" name="currency" value="USD" />
              <Button type={'submit'}>Pay</Button>
            </form>
          ) : (
            <Button onClick={() => connectMarina()}>Connect and Pay</Button>
          )}
        </ModalFooter>
      </Modal>
    </PayPopupWrapper>
  );
};

export default PayPopup;
