import styled from 'styled-components';
import { InputNumber } from 'antd';

export const PayInputWrapper = styled.div`
  span {
    &.tooltip {
      padding: 2px 4px;
      background: transparent;
      border-color: transparent;
      color: var(--stroke-action-primary);
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

export const Row = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  gap: 10px;
`;
export const InputWrapper = styled.div`
  position: relative;
  flex: 1;
`;
export const Input = styled(InputNumber)`
  width: 100%;
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
  min-width: 0;
  padding: 4px 60px 4px 10px;
  line-height: 1.5715;
  border: 1px solid var(--stroke-secondary);
  transition: all 0.3s;
  outline: none;
  input {
    padding: 0;
    &::placeholder {
      color: var(--text-placeholder);
      opacity: 1;
    }
    &:-ms-input-placeholder {
      color: var(--text-placeholder);
    }

    &::-ms-input-placeholder {
      color: var(--text-placeholder);
    }
  }
  .ant-input-number-handler-wrap {
    display: none;
  }
  .ant-input-number-focused {
    box-shadow: 0 0 0 1px var(--stroke-action-secondary);
    border-color: var(--stroke-action-secondary);
  }
  &:hover {
    border-color: var(--stroke-primary) !important;
  }

  &.withIcon {
    padding-left: 22px;
  }
`;
export const Toggle = styled.div`
  position: absolute;
  z-index: 10;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
  cursor: pointer;
  color: var(--icon-action-primary);
  background: var(--background-action-secondary);
  font-weight: 500;
  white-space: nowrap;
  padding: 1px 6px;
  margin-left: 0;
  margin-right: 0;
  border-radius: 1px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;
export const Triangle = styled.div`
  display: inline-block;
  margin: 0 2px;
  vertical-align: middle;
  width: 8px;
  height: 4px;
  border-top: solid 4px var(--icon-action-primary);
  border-left: solid 4px transparent;
  border-right: solid 4px transparent;
`;
export const PayBtn = styled.div`
  min-width: 150px;
  color: var(--text-over-disabled);
  font-size: 14px;
  text-align: center;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.tooltip {
    padding: 2px 4px;
    background: var(--background-disabled);
    border-color: transparent;
    cursor: not-allowed;
    color: var(--text-over-disabled);
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
export const InputBottomInfo = styled.div`
  p {
    font-size: 0.7rem;
    margin: 0;
  }
`;
