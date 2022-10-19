import React, { useContext } from 'react';
import { WarningTooltipProps } from './types';
import { ExclamationCircleOutlined } from '@ant-design/icons/lib';
import { Tooltip } from 'antd';
import { Wrapper } from './WarningTooltip.tyled';
import ThemeContext from '../../../context/ThemeContext';

const WarningTooltip = ({
  text,
  tooltipTitle,
  showWarning = false,
  withOutIcon = false,
}: WarningTooltipProps) => {
  const theme = useContext(ThemeContext);
  return (
    <Wrapper>
      {showWarning ? (
        <Tooltip
          title={tooltipTitle}
          color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
          getPopupContainer={trigger => trigger.parentElement as HTMLElement}
        >
          <span style={{ color: `${theme === 'light' ? '#000000ee' : '#e1e0e8'}`, padding: 0 }}>
            {text}
          </span>
          {!withOutIcon ? (
            <span style={{ color: '#FFB32C', paddingLeft: '5px' }}>
              <ExclamationCircleOutlined />
            </span>
          ) : (
            ''
          )}
        </Tooltip>
      ) : (
        <span>{text}</span>
      )}
    </Wrapper>
  );
};

export default WarningTooltip;
