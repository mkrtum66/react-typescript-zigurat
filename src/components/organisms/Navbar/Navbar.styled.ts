import styled from 'styled-components';
import { Header } from 'antd/lib/layout/layout';
import { Space } from 'antd';

export const StyledHeader = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--background-l0);
  &.top-nav-mobile {
    padding: 0;
    width: 100%;
    position: fixed;
    background: var(--background-l0);
    z-index: 9;
  }
`;

export const StyledTopRightNavStyles = styled(Space)`
  display: flex;
  align-items: center;
`;
