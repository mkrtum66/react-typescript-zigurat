import React, { FC } from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { DropDownLink, Item, MenuWrapper } from './Menu.styled';
import menuItems from './mock';
import { v4 as uuid } from 'uuid';

const DropDownMenu: FC = () => {
  const menu = () => {
    return (
      <MenuWrapper className="menu-list">
        {menuItems.map(item => {
          return (
            <Item key={uuid()}>
              <a
                href={`${item.link}.${window.location.host}`}
                onClick={() =>
                  (window.location.href = `${item.link}.${window.location.host}`)
                }
              >
                {item.title}
              </a>
            </Item>
          );
        })}
      </MenuWrapper>
    );
  };

  return (
    <Dropdown
      overlay={menu}
      arrow={false}
      trigger={['click']}
      placement="bottom"
      getPopupContainer={trigger => trigger.parentElement as HTMLElement}
    >
      <DropDownLink onClick={e => e.preventDefault()}>
        <p>Resources</p>
        <DownOutlined />
      </DropDownLink>
    </Dropdown>
  );
};

export default DropDownMenu;
