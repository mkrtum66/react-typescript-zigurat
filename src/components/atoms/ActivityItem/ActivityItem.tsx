import React, { useContext, useState } from 'react';
import { Item, Left, Right, Row, ToolTipWrapper } from './ActivityItem.styled';
import { StyledTooltip } from './ActivityItem.styled';
import ThemeContext from '../../../context/ThemeContext';
import { CopyOutlined, LinkOutlined } from '@ant-design/icons/lib';
import { Deposit } from '../TrendingItem/types';

const ActivityItem = ({ activity }: { activity: Deposit }) => {
  const theme = useContext(ThemeContext);

  const sliceText = (text: string) => `${text.slice(0, 6)}...${text.slice(-6)}`;

  const TokenToolTip = () => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText(activity.txid);
      setIsCopied(true);
    };

    return (
      <ToolTipWrapper>
        <StyledTooltip
          title={'Go to Etherscan'}
          color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
          getPopupContainer={trigger => trigger.parentElement as HTMLElement}
        >
          <a href="/" className="link-tooltip">
            {activity.txid}
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
    <Item>
      <Row>
        <Left>
          <p>Paid</p>
          <ToolTipWrapper>
            <StyledTooltip
              title={'US$334'}
              color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
              getPopupContainer={trigger => trigger.parentElement as HTMLElement}
            >
              <span className="tooltip">
                <span style={{ fontFamily: 'sans-serif' }}>Ξ {activity.amount}</span>
              </span>
            </StyledTooltip>
          </ToolTipWrapper>
        </Left>
        <Right>
          <ToolTipWrapper>
            <StyledTooltip
              title={new Date(activity.timestamp).toUTCString()}
              color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
              getPopupContainer={trigger => trigger.parentElement as HTMLElement}
            >
              <span className="right-tooltip">an hour ago</span>
            </StyledTooltip>
            <StyledTooltip
              title={'See transaction'}
              color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
              getPopupContainer={trigger => trigger.parentElement as HTMLElement}
            >
              <a href="/" className="right-tooltip link">
                <LinkOutlined />
              </a>
            </StyledTooltip>
          </ToolTipWrapper>

          <ToolTipWrapper>
            <StyledTooltip
              title={TokenToolTip}
              color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
              getPopupContainer={trigger => trigger.parentElement as HTMLElement}
            >
              <p>{sliceText(activity.txid)}</p>
            </StyledTooltip>
          </ToolTipWrapper>
        </Right>
      </Row>
      {/*{activity.isOk ? <Ok>ok</Ok> : ''}*/}
    </Item>
  );
};

export default ActivityItem;
