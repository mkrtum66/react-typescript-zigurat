import styled, { css } from 'styled-components';
import { TextFieldStyleProps } from './types';

export const FieldWrapper = styled.div<TextFieldStyleProps>`
  width: 100%;
  ${({ required }) =>
    !!required &&
    css`
      label {
        &:before {
          display: inline-block;
          margin-right: 4px;
          color: #ff4d4f;
          font-size: 14px;
          font-family: SimSun, sans-serif;
          line-height: 1;
          content: '*';
        }
      }
    `}
`;
export const Label = styled.label<TextFieldStyleProps>`
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
  ${({ type }) =>
    type === 'file' &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;
export const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 8px;
  width: 14px;
  height: 14px;
  transform: translateY(-50%);
  line-height: 1;
`;
export const Input = styled.input<TextFieldStyleProps>`
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
  ${({ validated }) =>
    validated &&
    css`
      box-shadow: 0 0 0 1px var(--stroke-action-secondary);
      border-color: var(--stroke-action-secondary);
    `}
`;
export const InputWrapper = styled.div`
  position: relative;
`;
export const Information = styled.div`
  color: var(--text-secondary);
  clear: both;
  min-height: 24px;
  font-size: 14px;
  line-height: 1.5715;
  transition: color 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
`;
