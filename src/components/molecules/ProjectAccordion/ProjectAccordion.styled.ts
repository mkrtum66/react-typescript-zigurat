import styled from 'styled-components';
import { Collapse, Descriptions } from 'antd';

export const Accordion = styled(Collapse)`
  background: var(--background-l2);
  box-shadow: var(--background-tranding1) 10px 10px;
  border-radius: 1px;
  stroke: none;
  overflow: hidden;
  padding: 20px;
  border: none;
  .ant-collapse-item {
    border-bottom: none;
    .ant-collapse-arrow {
      color: var(--text-header);
    }
    .ant-collapse-header {
      color: var(--text-header);
      font-weight: 500;
      .icon {
        margin-left: 10px;
        color: var(--text-secondary);
      }
    }
  }
  .ant-collapse-content {
    background-color: transparent;
    border: none;
    color: var(--text-secondary);
    .ant-collapse-content-box {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;
export const StyledDescriptions = styled(Descriptions)`
  .ant-descriptions-item-label {
    font-weight: 600;
    color: var(--text-secondary);
    .anticon {
      padding-left: 5px;
    }
  }
  .ant-descriptions-item-content {
    color: var(--text-primary);
    display: flex;
    align-items: center;
  }
`;
export const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 0.7rem;
    color: var(--text-tertiary);
    line-height: 1.5715;
  }
`;
