import React, { useContext, useState } from 'react';
import { Dropdown } from 'antd';
import { CopyOutlined, LogoutOutlined } from '@ant-design/icons/lib';
import { DropDownButton, LogoutBtn, StyledMenu } from './LoggedInUser.styled';
import { StyledTooltip, ToolTipWrapper } from '../ActivityItem/ActivityItem.styled';
import ThemeContext from '../../../context/ThemeContext';
import { WalletData } from './types';

const LoggedInUser = ({
  data,
  handleDisconnect,
}: {
  data: WalletData;
  handleDisconnect: () => void;
}) => {
  const theme = useContext(ThemeContext);
  const sliceText = (text: string) => `${text.slice(0, 6)}...${text.slice(-6)}`;

  const TokenToolTip = () => {
    const [isCopied, setIsCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText(data.address);
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
            {sliceText(data.address)}
          </a>
        </StyledTooltip>
        <StyledTooltip
          title={!isCopied ? 'Copy to clipboard' : 'Copied'}
          color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
          getPopupContainer={trigger => trigger.parentElement as HTMLElement}
        >
          <span className="copy-btn" onClick={handleCopy}>
            <CopyOutlined style={{ color: theme !== 'light' ? '#fbf9f6' : '#1c1b21' }} />
          </span>
        </StyledTooltip>
      </ToolTipWrapper>
    );
  };

  const menu = (
    <StyledMenu
      items={[
        {
          label: <TokenToolTip />,
          key: '0',
        },
        {
          label: (
            <LogoutBtn onClick={handleDisconnect}>
              <p>Disconnect</p>
              <LogoutOutlined style={{ color: theme !== 'light' ? '#fbf9f6' : '#1c1b21' }} />
            </LogoutBtn>
          ),
          key: '1',
        },
      ]}
    />
  );
  return (
    <Dropdown
      overlay={menu}
      getPopupContainer={trigger => trigger.parentElement as HTMLElement}
      placement={'bottom'}
    >
      <DropDownButton onClick={e => e.preventDefault()}>
        <span>{sliceText(data.address)}</span>
        <p>$0</p>
      </DropDownButton>
    </Dropdown>
  );
};

export default LoggedInUser;
