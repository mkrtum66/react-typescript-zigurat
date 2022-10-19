import React, { useContext, useState } from 'react';
import { PaymentWrapper, StyledRow } from './Payment.styled';
import { Deposit } from '../TrendingItem/types';
import TimeStampAgo from '../../../utils/TimeStamp';
import ThemeContext from '../../../context/ThemeContext';
import { CopyOutlined } from '@ant-design/icons/lib';
import { StyledTooltip, ToolTipWrapper } from '../ActivityItem/ActivityItem.styled';

const Payment = ({ deposit, handle }: { deposit: Deposit[]; handle: string }) => {
  const theme = useContext(ThemeContext);
  const sliceText = (text: string) => `${text.slice(0, 6)}...${text.slice(-6)}`;
  const TokenToolTip = ({ token }: { token: string }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(token);
      setIsCopied(true);
    };

    return (
      <ToolTipWrapper>
        <StyledTooltip
          title={''}
          color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
          getPopupContainer={trigger => trigger.parentElement as HTMLElement}
        >
          <a href="/" className="link-tooltip">
            {token}
          </a>
        </StyledTooltip>
        <StyledTooltip
          title={!isCopied ? 'Copy to clipboard' : 'Copied'}
          color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
          getPopupContainer={trigger => trigger.parentElement as HTMLElement}
        >
          <span className="copy-btn" onClick={handleCopy}>
            <CopyOutlined />
          </span>
        </StyledTooltip>
      </ToolTipWrapper>
    );
  };

  return (
    <>
      {deposit.map((item, i) => {
        return (
          <PaymentWrapper key={i}>
            <StyledRow>
              <div className="title">
                <span>{handle}</span>
              </div>
              <div className="text">
                <span>
                  <TimeStampAgo date={item.timestamp} />
                </span>
              </div>
            </StyledRow>
            <StyledRow>
              <div>
                <span>{item.currency === 'BTC' ? '₿' : '$'}</span>
                {item.amount}
              </div>
              <div>
                <ToolTipWrapper>
                  <StyledTooltip
                    title={<TokenToolTip token={item.txid} />}
                    color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
                    getPopupContainer={trigger => trigger.parentElement as HTMLElement}
                  >
                    <p>{sliceText(item.txid)}</p>
                  </StyledTooltip>
                </ToolTipWrapper>
              </div>
            </StyledRow>
          </PaymentWrapper>
        );
      })}
    </>
  );
};

export default Payment;
