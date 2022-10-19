import React from 'react';
import { Item } from './NavItem.styled';
import { NavProps } from './types';

const NavItem = ({ children, to, className, key, onClick }: NavProps) => {
  return (
    <Item to={to} className={className} key={key} onClick={onClick}>
      {children}
    </Item>
  );
};

export default NavItem;
