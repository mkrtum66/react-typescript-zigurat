import styled from 'styled-components';
import { Menu } from 'antd';

export const DropDownButton = styled.div`
  height: 45px;
  border-radius: 2px;
  padding: 4px 19px 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--background-loggedInBtn);
  cursor: pointer;
  user-select: all;
  span {
    display: flex;
    margin: auto;
    cursor: pointer;
    user-select: all;
    line-height: 22px;
    color: var(--text-primary);
  }
  p {
    vertical-align: middle;
    line-height: 1;
    color: var(--text-placeholder);
    margin: 0;
  }
`;

export const LogoutBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMenu = styled(Menu)`
  padding: 0;
  border-radius: 1px;
  background-color: var(--background-l0);
  border: 1px solid var(--stroke-tertiary);
  box-shadow: 0 8px 12px var(--boxShadow-primary);
  li {
    padding: 10px 15px;
    a {
      color: var(--text-primary);
    }
    p {
      margin: 0;
      color: var(--text-primary);
    }
    &:hover {
      background-color: var(--background-l1);
    }
  }
`;
