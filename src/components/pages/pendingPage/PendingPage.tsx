import React, { useEffect, useState } from 'react';
import useMobile from '../../../hooks/Mobile';
import { Section } from '../../../styles/global';
import { Dots, Equals, Row, WaitingText } from './PendingPage.styled';
import { useSelector } from 'react-redux';
import { IGlobalState } from '../../../utils/models/globalState';
import { getInvoiceInfo } from '../../../utils/api/invoices';
import socketIOClient from 'socket.io-client';

const PendingPage = () => {
  const isMobile = useMobile();
  const { invoice } = useSelector((state: IGlobalState) => state.invoices);
  const [status, setStatus] = useState('New');

  useEffect(() => {
    invoice && invoice.id && getInvoiceInfo(invoice.storeId, invoice.id).then(res => res);
  }, [invoice]);

  const socketURL: string = process.env.REACT_APP_BASE_SOCKET_URL
    ? process.env.REACT_APP_BASE_SOCKET_URL
    : 'http://localhost:3001';

  useEffect(() => {
    const socket = socketIOClient(socketURL);
    socket.on('status', data => {
      setStatus(data.status);
    });
    return () => {
      socket.close()
    }
  }, [socketURL, status]);

  const showCurrentPaymentInfo = (status: string) => {
    if (status.toLowerCase() === 'new') {
      return (
        <WaitingText>
          Waiting for you to send BTC
          <Dots className="snippet">
            <div className="stage">
              <div className="dot-falling" />
            </div>
          </Dots>
        </WaitingText>
      );
    } else if (status.toLowerCase() === 'settled') {
      return (
        <WaitingText>
          Waiting for confirmations
          <Dots className="snippet">
            <div className="stage">
              <div className="dot-falling" />
            </div>
          </Dots>
        </WaitingText>
      );
    } else if (status.toLowerCase() === 'complete') {
      return <WaitingText>Complete</WaitingText>;
    } else {
      return <WaitingText>Something went wrong!</WaitingText>;
    }
  };

  return (
    <div style={{ marginTop: `${isMobile ? '54px' : ''}`, padding: '7vw 0' }}>
      <Section maxWidth={780}>
        <Row>
          <p>Token: {invoice.token?.handle}</p>
          <p>Order Id: {invoice.id}</p>
        </Row>
        {showCurrentPaymentInfo(status)}
        <Equals>{`${invoice.amount} ${invoice.currency} equals ${invoice.count} ${invoice.token?.name}`}</Equals>
      </Section>
    </div>
  );
};

export default PendingPage;
