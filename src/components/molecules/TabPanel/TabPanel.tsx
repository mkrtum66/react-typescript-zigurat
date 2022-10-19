import React from 'react';
import { Panel } from './TabPanel.styled';

const TabPanel = ({ ...props }) => {
  return <Panel {...props}>{props.children}</Panel>;
};

export default TabPanel;
