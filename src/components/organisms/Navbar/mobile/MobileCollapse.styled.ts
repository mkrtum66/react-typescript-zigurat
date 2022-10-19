import styled, { css } from 'styled-components';
import { Collapse } from 'antd';
const { Panel } = Collapse;

export const StyledCollapse = styled(Collapse)`
  width: 100%;
  background: transparent;
  height: 100%;
  .ant-collapse-header {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
export const HeaderIcons = styled.div`
  display: flex !important;
  align-items: center !important;
  gap: 10px;
  .anticon-menu {
    padding-left: 10px;
    font-size: 20px;
  }
`;
export const StyledPanel = styled(Panel)`
  background: var(--background-l0);
  .title {
    font-size: 14px;
    font-weight: 600;
    color: var(--text-primary);
  }
  ${({ inner }: { inner?: boolean }) =>
    inner &&
    css`
      padding: 0;
    `}
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .mobile {
    padding: 10px 15px;
  }
`;
export const LanguageWrapper = styled.div`
  padding: 10px 15px;
`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
