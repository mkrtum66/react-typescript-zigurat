import styled from 'styled-components';
import { Select } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const GlobalOutlinedStyled = styled(GlobalOutlined)`
  color: var(--text-primary);
  margin-block-end: 2px;
`;
export const StyledSelect = styled(Select)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  height: 30px;
  font-weight: 500;

  .ant-select-selector {
    background-color: transparent !important;
    color: var(--text-primary);
    padding: 0 8px !important;
    border: none !important;
    border-color: var(--stroke-secondary) !important;
  }
  .ant-select-arrow {
    display: none;
  }
  .ant-select-dropdown {
    border: 1px solid var(--stroke-tertiary);
    box-shadow: 0 8px 12px var(--boxShadow-primary);
    padding: 0;
    background-color: var(--background-l0);
    min-width: 33px;
  }
  .ant-select-item-option {
    transition: all 3ms ease;
    color: var(--text-primary);
    background: transparent;
    &:hover {
      background-color: var(--background-l2);
    }
  }
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
  }
`;
