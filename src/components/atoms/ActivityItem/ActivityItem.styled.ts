import styled from 'styled-components';
import { Tooltip } from 'antd';

export const Item = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--boxShadow-primary);
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ToolTipWrapper = styled.div`
  .ant-tooltip-arrow-content {
    display: none;
  }
  .ant-tooltip-inner {
    color: var(--text-primary);
    border-radius: var(--radius-md);
    background: var(--background-l0);
    border: 1px solid var(--stroke-tertiary);
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 39%);
    font-size: 0.85rem;
  }
  &.right-tooltip {
    font-size: 0.7rem;
    color: rgba(0, 0, 0, 0.333);
    margin: 0;
    &.link {
      color: var(--text-primary);
      margin-left: 4px;
    }
  }
  &.link-tooltip {
    cursor: pointer;
    margin-right: 5px;
    &:hover {
      color: var(--text-action-primary);
      text-decoration: underline !important;
    }
  }
  .copy-btn {
    margin-left: 20px;
  }
`;
export const StyledTooltip = styled(Tooltip)`
  color: var(--text-tertiary);
  .ant-tooltip-arrow-content {
    display: none;
  }
  .ant-tooltip-inner {
    color: var(--text-primary);
    border-radius: var(--radius-md);
    background: var(--background-l0);
    border: 1px solid var(--stroke-tertiary);
    padding: 12px 16px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 39%);
    font-size: 0.85rem;
  }
  &.right-tooltip {
    font-size: 0.7rem;
    color: var(--text-tertiary);
    margin: 0;
    &.link {
      color: var(--text-primary);
      margin-left: 4px;
    }
  }
`;
export const Right = styled.div`
  p {
    font-size: 0.7rem;
    color: var(--text-tertiary);
    margin: 0;
  }
`;
export const Left = styled.div`
  p {
    font-size: 0.7rem;
    color: var(--text-tertiary);
    margin: 0;
  }
`;
export const Ok = styled.p`
  margin-top: 5px !important;
  margin-bottom: 0 !important;
  color: var(--text-secondary) !important;
  overflow-wrap: break-word !important;
  padding-right: 0.5rem !important;
  font-size: 14px !important;
`;
