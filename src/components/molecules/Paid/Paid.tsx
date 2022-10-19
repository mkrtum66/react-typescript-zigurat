import React, { useContext } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons/lib';
import { StyledTooltip } from '../../pages/currentTrendingProject/CurrentTranding.styled';
import { StyledPaid } from './Paid.styled';
import ThemeContext from '../../../context/ThemeContext';
import { ProjectProps } from '../../../utils/models/project/projectState';

const Paid = ({ trend }: { trend: ProjectProps }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledPaid>
      <div>
        <div className="left">
          <p>
            <span>Target</span>
            <QuestionCircleOutlined />
          </p>
        </div>
        <div className="right">
          <StyledTooltip
            title={trend.details.target}
            color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
            getPopupContainer={trigger => trigger.parentElement as HTMLElement}
          >
            <span className="tooltip">
              {/*<span style={{ fontFamily: 'sans-serif' }}>$</span>*/}
              {trend.details.target}
            </span>
          </StyledTooltip>
        </div>
      </div>
      <div>
        <div className="left">
          <p>
            <span>Raised</span>
            <QuestionCircleOutlined />
          </p>
        </div>
        <div className="right">
          <StyledTooltip
            title={trend.summary.totalRaised}
            color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
            getPopupContainer={trigger => trigger.parentElement as HTMLElement}
          >
            <span className="tooltip empty">
              {/*<span style={{ fontFamily: 'sans-serif' }}>$</span>*/}
              {trend.summary.totalRaised}
            </span>
          </StyledTooltip>
        </div>
      </div>
      <div>
        <div className="left">
          <p>
            <span>Ending in</span>
            <QuestionCircleOutlined />
          </p>
        </div>
        <div className="right">
          <StyledTooltip
            title={'$123'}
            visible={false}
            color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
            getPopupContainer={trigger => trigger.parentElement as HTMLElement}
          >
            <span className="tooltip">{'7 days'}</span>
          </StyledTooltip>
        </div>
      </div>
    </StyledPaid>
  );
};

export default Paid;
