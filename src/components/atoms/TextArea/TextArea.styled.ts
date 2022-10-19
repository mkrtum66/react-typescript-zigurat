import styled from 'styled-components';
import { Input } from 'antd';
const { TextArea } = Input;

export const StyledTextArea = styled(TextArea)`
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
  padding: 4px 11px;
  line-height: 1.5715;
  border: 1px solid var(--stroke-secondary);
  transition: all 0.3s;
  outline: none;
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
  &.withIcon {
    padding-left: 22px;
  }

  :-ms-input-placeholder {
    color: var(--text-placeholder);
  }

  ::-ms-input-placeholder {
    color: var(--text-placeholder);
  }
`;
