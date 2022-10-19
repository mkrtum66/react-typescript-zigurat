import styled from 'styled-components';
import { Collapse } from 'antd';

export const SectionContent = styled.div`
  display: grid;
  row-gap: 60px;
  padding-left: 20px;
  padding-right: 20px;
  h1 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.2;
    margin: 0px;
    color: var(--text-header);
  }
`;
export const Accordion = styled(Collapse)`
  border-color: var(--stroke-secondary);
  background-color: transparent;
  .ant-collapse-item {
    border-color: var(--stroke-secondary);
    .ant-collapse-header {
      font-weight: 500;
      color: var(--text-header);
    }
    .ant-collapse-content {
      background-color: transparent;
      border: none;
      color: var(--text-primary);
      a {
        color: var(--text-action-primary);
        font-weight: 600;
      }
    }
  }
`;
