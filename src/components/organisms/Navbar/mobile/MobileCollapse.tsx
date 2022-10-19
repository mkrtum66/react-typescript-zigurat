import React, { useState } from 'react';
import { StyledHeader } from '../Navbar.styled';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../../../atoms/Logo';
import NavItem from '../../../atoms/NavItem';
import {
  ButtonWrapper,
  Content,
  HeaderIcons,
  LanguageWrapper,
  StyledCollapse,
  StyledPanel,
} from './MobileCollapse.styled';
import menuItems from '../../../molecules/Menu/mock';
import { v4 as uuid } from 'uuid';
import { DownOutlined, MessageOutlined } from '@ant-design/icons/lib';
import NavLanguageSelector from '../../../molecules/NavLanguageSelector';
import ThemePicker from '../../../atoms/ThemePicker';
import { MobileNavProps } from '../../../../types';
import Button from '../../../atoms/Button';

const MobileCollapse = ({ switchTheme, setConnectPopup }: MobileNavProps) => {
  const [open, setOpen] = useState<number>(0);
  function callback() {
    if (!open) {
      setOpen(1);
    } else {
      setOpen(0);
    }
  }
  const header = () => {
    return (
      <HeaderIcons>
        <NavItem to={'/'}>
          <Logo height={30} />
        </NavItem>
        <MenuOutlined onClick={callback} style={{ color: 'var(--icon-primary)' }} />
      </HeaderIcons>
    );
  };
  return (
    <StyledHeader
      className="top-nav top-nav-mobile"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <StyledCollapse activeKey={open} bordered={false} expandIcon={header}>
        <StyledPanel header="" key={1}>
          <Content>
            <NavItem to={'/faq'} className={'mobile'} onClick={() => setOpen(0)}>
              FAQ
            </NavItem>
            <NavItem to={'/discord'} className={'mobile'} onClick={() => setOpen(0)}>
              Discord
            </NavItem>
            <StyledCollapse
              bordered={false}
              expandIconPosition={'right'}
              expandIcon={() => <DownOutlined />}
            >
              <StyledPanel
                header={<span className="title">Resources</span>}
                key={'inside'}
                inner={true}
              >
                <Content>
                  {menuItems.map(item => {
                    return (
                      <NavItem
                        key={uuid()}
                        to={item.link}
                        className={'mobile'}
                        onClick={() => setOpen(0)}
                      >
                        {item.title}
                      </NavItem>
                    );
                  })}
                </Content>
              </StyledPanel>
            </StyledCollapse>
            <LanguageWrapper>
              <NavLanguageSelector mobile={true} />
            </LanguageWrapper>
            <ThemePicker onClick={switchTheme} mobile={true} />
            <NavItem to={'/feedback'} className={'mobile'} onClick={() => setOpen(0)}>
              <MessageOutlined />
              <p>Feedback</p>
            </NavItem>
            <ButtonWrapper>
              <Button outlined={true} onClick={() => setConnectPopup(true)}>
                Connect
              </Button>
            </ButtonWrapper>
          </Content>
        </StyledPanel>
      </StyledCollapse>
    </StyledHeader>
  );
};

export default MobileCollapse;
