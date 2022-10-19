import styled from 'styled-components';

export const Wrapper = styled.div`
  span {
    padding-right: 0;
    font-size: 14px;
    &.tooltip {
      padding: 2px 4px;
      background: var(--background-tranding);
      cursor: default;
      margin-right: 10px;
    }
  }
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
`;
