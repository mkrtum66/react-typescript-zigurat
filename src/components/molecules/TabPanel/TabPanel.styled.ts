import styled from 'styled-components';

import { Tabs } from 'antd';

export const Panel = styled(Tabs)`
  text-transform: uppercase;
  .ant-tabs-tab {
    padding: 6px 0;
    .ant-tabs-tab-btn {
      color: var(--text-secondary);
    }
    &.ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: var(--text-primary);
      }
    }
  }
  .ant-tabs-nav {
    &:before {
      border: none;
    }
  }
  .ant-tabs-ink-bar {
    background-color: var(--text-primary);
  }
`;
