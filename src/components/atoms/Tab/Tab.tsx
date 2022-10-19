import React from 'react';
import { StyledTab } from './Tab.styled';

const Tab = ({ ...props }) => {
  return <StyledTab {...props}>{props.children}</StyledTab>;
};

export default Tab;
