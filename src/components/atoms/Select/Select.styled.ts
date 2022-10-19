import styled from 'styled-components';
import { Select } from 'antd';

export const StyledSelect = styled(Select)`
  font-size: 14px;
  background: transparent;
  color: var(--text-primary);
  border-radius: var(--radius-sm);
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  -webkit-font-feature-settings: 'tnum', 'tnum';
  font-feature-settings: 'tnum', 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  line-height: 1.5715;
  border: 1px solid var(--stroke-secondary);
  transition: all 0.3s;
  &:focus {
    box-shadow: 0 0 0 1px var(--stroke-action-secondary);
    border-color: var(--stroke-action-secondary);
  }
  &:hover {
    border-color: var(--stroke-primary) !important;
  }
  ::placeholder {
    color: var(--text-placeholder);
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: var(--text-placeholder);
  }

  ::-ms-input-placeholder {
    color: var(--text-placeholder);
  }

  .ant-select-selector {
    background-color: transparent !important;
    color: var(--text-primary);
    padding: 0 8px !important;
    border: none !important;
    border-color: var(--stroke-secondary) !important;
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
  &.ant-select-multiple {
    .ant-select-selection-item {
      border-color: var(--background-l2);
      background-color: var(--background-tranding);
      .ant-select-selection-item-content {
        color: var(--text-primary);
      }
      .ant-select-selection-item-remove {
        color: var(--text-primary);
      }
    }
  }
`;
export const SelectWrapper = styled.div`
  position: relative;
`;
export const SelectLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  padding-bottom: 8px;
  line-height: 1.5715;
  white-space: normal;
  text-align: left;
  flex-direction: row;
`;
