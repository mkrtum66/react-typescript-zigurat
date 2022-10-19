import styled from 'styled-components';
import { Tooltip } from 'antd';
import { ToolOutlined } from '@ant-design/icons';

export const ProjectHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;
export const ProjectLogo = styled.div`
  margin-right: 1.25rem;
  margin-bottom: 1.25rem;
  height: 100%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 120px;
    width: 120px;
    border-radius: 1px;
    img {
      max-height: 100%;
      min-width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
`;
export const HeaderDescriptionWrapper = styled.div`
  flex: 1;
  min-width: 70%;
`;
export const TopDesc = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  h1 {
    color: var(--text-primary);
    font-size: 2.4rem;
    line-height: 2.8rem;
    margin: 0;
  }
`;
export const DescInfo = styled.div`
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    span {
      color: var(--text-tertiary);
      padding-right: 10px;
      font-size: 14px;
      &.tooltip {
        padding: 2px 4px;
        background: var(--background-tranding);
        cursor: default;
        margin-right: 10px;
      }
    }
  }
  .ant-tooltip-arrow-content {
    background: var(--stroke-tertiary) !important;
    box-shadow: -3px -3px 7px rgb(0 0 0 / 7%);
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
`;
export const StyledTooltip = styled(Tooltip)`
  span {
  }
`;
export const ToolIcon = styled(ToolOutlined)`
  width: 32px;
  height: 32px;
  transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  line-height: 1;
  color: var(--text-over-action-secondary);
  cursor: pointer;
  font-weight: 500;
  svg {
    width: 55%;
    height: 55%;
    fill: var(--text-over-action-secondary);
  }
`;
export const ExternalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 8px;
  padding-bottom: 4px;
  font-weight: 500;
  span {
    color: var(--text-secondary);
    margin-right: 20px;
    font-weight: 600;
  }
  a {
    font-weight: 500;
    margin-right: 20px;
    color: var(--text-action-primary);
    span {
      margin-right: 4px;
      color: var(--text-action-primary);
      line-height: 1;
      vertical-align: middle;
    }
  }
`;
