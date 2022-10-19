import React, { useContext } from 'react';
import ThemeContext from '../../../context/ThemeContext';
import { MessageOutlined } from '@ant-design/icons/lib';
import { Tooltip } from 'antd';
import { FeedbackButton, Wrapper } from './FeedbackFormButton.styled';
const image = require('../../../assets/bolt.png');

const FeedbackFormButton = ({
  mobile,
  projectHandle,
}: {
  mobile?: boolean;
  projectHandle?: string;
}) => {
  const theme = useContext(ThemeContext);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  if (mobile) {
    return (
      <div>
        <MessageOutlined size={16} />
        <a style={{ margin: '0 0 2px 12px', fontWeight: 400 }} className="quiet" href={'/'}>
          <span>Give feedback</span>
        </a>
      </div>
    );
  }
  return (
    <Wrapper onClick={scrollToTop}>
      <Tooltip
        color={theme === 'light' ? '#fbf9f6' : '#1c1b21'}
        getPopupContainer={trigger => trigger.parentElement as HTMLElement}
        title={
          <a className="quiet hover-action" href={'/'}>
            <span>Give feedback</span>
          </a>
        }
      >
        <FeedbackButton className={`feedback-button hide-mobile ${theme === 'dark' ? 'dark' : ''}`}>
          <img src={image} alt="Bolt" />
        </FeedbackButton>
      </Tooltip>
    </Wrapper>
  );
};

export default FeedbackFormButton;
