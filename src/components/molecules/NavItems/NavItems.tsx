import React from 'react';
import { ItemsWrapper } from './NavItems.styled';
import NavItem from '../../atoms/NavItem';
import Logo from '../../atoms/Logo';
import DropDownMenu from '../Menu';
import { useNavigate } from 'react-router-dom';

const NavItems = () => {
  const navigate = useNavigate();
  const goTo = (id: string) => {
    navigate('/');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <ItemsWrapper>
      <NavItem to={'/'}>
        <Logo />
      </NavItem>

      <NavItem to={'/projects'}>Projects</NavItem>
      <NavItem to={''} onClick={() => goTo('faq')}>
        FAQ
      </NavItem>
      <DropDownMenu />
    </ItemsWrapper>
  );
};

export default NavItems;
