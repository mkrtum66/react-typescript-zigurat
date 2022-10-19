import styled from 'styled-components';
import Search from 'antd/es/input/Search';

export const PageTitle = styled.h2`
  color: var(--text-header);
  font-weight: 500;
  font-size: 21px;
  margin: 0 0 15px 0;
`;
export const PageDescription = styled.p`
  max-width: 800px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  color: var(--text-primary);
  font-size: 14px;
`;
export const StyledSearch = styled(Search)`
  margin-bottom: 20px;
  .ant-input-wrapper {
    &.ant-input-group {
      background: transparent;
      color: var(--text-primary);
      border: 1px solid var(--stroke-secondary);
      border-radius: 2px;
      .ant-input-group-addon {
        background-color: transparent;
        border: none;
        color: var(--text-secondary);
        button {
          background: transparent;
          border: none;
          border-left: 1px solid var(--stroke-primary);
          color: var(--icon-action-primary) !important;
        }
      }
      .ant-input-affix-wrapper {
        background-color: transparent;
        border: none;
        padding: 5px 0;
        &.ant-input-affix-wrapper-focused {
          box-shadow: none;
        }
        .ant-input-clear-icon {
          margin-right: 10px;
          color: var(--icon-secondary);
        }
        input {
          background: transparent;
          font-size: 14px;
          line-height: 1.5715;
          color: var(--text-primary);
        }
        .ant-input-prefix {
          color: var(--text-secondary);
        }
      }
    }
  }
`;
