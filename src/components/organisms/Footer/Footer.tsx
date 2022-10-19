import React from 'react';
import { FooterBottom, FooterContent, Footerheader, FooterWrapper } from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <Footerheader>
        <div>🏛️</div>
        <h3>
          <div>Made with open-source ❤️ on the intertnet.</div>
          With thanks to everyone building, especially{' '}
          <a href={'https://github.com/vulpemventures/'}>Vulpem</a> for liquid libraries and{' '}
          <a href={'https://github.com/jbx-protocol/juice-interface'}>Juicebox</a> for an awesome
          design.
        </h3>
      </Footerheader>
      <FooterContent>
        <span>
          <a href={'/'}>English</a>
        </span>
        <span>
          <a href={'/'}>中文</a>
        </span>
        <span>
          <a href={'/'}>Pусский</a>
        </span>
      </FooterContent>
      <FooterBottom>
        <a href="https://discord.com/">Discord</a>
        <a href="https://github.com/ziguatme">GitHub</a>
        <a href="https://twitter.com/">Twitter</a>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
