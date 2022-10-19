import styled from 'styled-components';

export const StyledPaid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: nowrap;
    .left {
      text-transform: uppercase;
      color: var(--text-tertiary);
      font-size: 0.8rem;
      font-weight: 500;
      p {
        margin-bottom: 0;
        span {
          margin-right: 5px;
        }
      }
    }
    .right {
      .tooltip {
        font-weight: 500;
        font-size: 1.1rem;
        line-height: 1;
        padding: 2px 4px;
        cursor: default;
        &.empty {
          color: var(--text-brand-primary) !important;
        }
        .extra {
          font-size: 0.8rem;
          color: var(--text-tertiary);
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
    }
  }
`;
