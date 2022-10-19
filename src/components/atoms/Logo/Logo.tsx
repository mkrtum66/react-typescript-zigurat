import React, { useContext } from 'react';
import { LogoWrapper, Image } from './Logo.styled';
import ThemeContext from '../../../context/ThemeContext';
const logoDark = require('../../../assets/zig-2-w.png');
const logo = require('../../../assets/zig-2-b.png');

const Logo = ({ height }: { height?: number }) => {
  const theme = useContext(ThemeContext);
  if (theme === 'dark') {
    return (
      <LogoWrapper height={height}>
        <Image src={logoDark} alt="logo" />
      </LogoWrapper>
    );
  }
  return (
    <LogoWrapper height={height}>
      <Image src={logo} alt="logo" />
    </LogoWrapper>
  );
};

export default Logo;
