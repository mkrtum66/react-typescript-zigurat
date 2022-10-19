import React, { useContext, useState } from 'react';
import { CloseButton, DrawerContent, DrawerHeader, Item } from './DrawerItem.styled';
import { CaretRightOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import ThemeContext from '../../../context/ThemeContext';
import { IDrawerItemProps } from './types';
import useMobile from '../../../hooks/Mobile';

const DrawerItem = ({ project, children }: IDrawerItemProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const isMobile = useMobile();
  const theme = useContext(ThemeContext);
  const drawerBackgroundColor = theme === 'light' ? '#fbf9f6' : '#1c1b21';
  const fontColor = theme === 'light' ? '#000000ee' : '#e1e0e8';

  const showDrawer = () => {
    document.body.style.overflow = 'hidden';
    setVisible(true);
  };

  const onClose = () => {
    document.body.style.overflow = 'auto';
    setVisible(false);
  };
  return (
    <>
      <Item onClick={showDrawer}>
        <p className="number">{project.id}</p>
        <div className="info">
          <p className="title">{project.title}</p>
          <p className="description">{project.description}</p>
        </div>
        <CaretRightOutlined style={{ alignSelf: 'center', color: 'rgb(24, 180, 199)' }} />
      </Item>
      <Drawer
        closable={false}
        placement="right"
        onClose={onClose}
        visible={visible}
        width={!isMobile ? 640 : 320}
        bodyStyle={{ background: drawerBackgroundColor }}
        getContainer={false}
        style={{ position: 'fixed' }}
      >
        <DrawerContent>
          <DrawerHeader>
            <h1>{project.title}</h1>
            <CloseButton style={{ color: fontColor }} onClick={onClose} />
          </DrawerHeader>
          <p className="description">{project.description}</p>
          {children}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerItem;
