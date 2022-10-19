import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons/lib';

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 15px;
  border-radius: 1px;
  font-weight: 600;
  color: rgb(24, 180, 199);
  border-color: rgb(24, 180, 199);
  border-style: solid;
  border-width: 1px;
  touch-action: manipulation;
  gap: 10px;
  font-size: 14px;
  .number {
    margin-right: 15px;
  }
  .info {
    margin-right: 10px;
    flex: 1 1 0%;
    .title {
      font-size: 14px;
      margin: 0;
    }
    .description {
      margin: 0;
      font-weight: 400;
      font-size: 0.75rem;
      color: var(--text-secondary);
    }
  }
`;

export const DrawerContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
export const DrawerHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  h1 {
    color: var(--text-header);
    margin-bottom: 14px;
    font-size: 28px;
  }
`;
export const CloseButton = styled(CloseOutlined)`
  color: var(--icon-secondary);
  --scroll-bar: 17px;
  padding: 20px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  font-style: normal;
  line-height: 1;
  text-align: center;
  text-transform: none;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  transition: color 0.3s;
  text-rendering: auto;
`;
