import styled, { css } from 'styled-components';
import type { ButtonStyledProps } from './types';

export const StyledButton = styled.button<ButtonStyledProps>`
  background: var(--background-action-primary);
  color: var(--text-over-action-primary);
  border-radius: 0;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  border: 1px solid transparent;
  &:hover {
    border-radius: 0;
    box-shadow: 0 8px 12px rgb(0 0 0 / 12%);
    background: var(--background-action-primary);
    border-color: transparent;
    color: var(--text-over-action-primary);
  }
  &[disabled] {
    background: var(--background-disabled);
    border-color: transparent;
    color: var(--text-over-disabled);
    cursor: not-allowed;
    &:hover {
      color: var(--text-over-disabled);
      border-color: var(--stroke-disabled);
      background: var(--background-disabled);
      opacity: 0.7;
    }
  }
  ${({ outlined }) =>
    !!outlined &&
    css`
      background: transparent;
      border-color: var(--stroke-action-secondary);
      color: var(--text-over-action-secondary);
      font-weight: 500;
      border-radius: var(--radius-sm);
      height: 32px;
      padding: 4px 15px;
      font-size: 14px;
      &:hover {
        border-radius: 0;
        box-shadow: none;
        background: transparent;
        border-color: var(--stroke-action-primary);
        color: var(--text-action-primary);
      }
    `}
  ${({ dashed }) =>
    !!dashed &&
    css`
      background: transparent;
      border-color: var(--stroke-action-secondary);
      color: var(--text-over-action-secondary);
      font-weight: 500;
      border-radius: var(--radius-sm);
      height: 32px;
      padding: 4px 15px;
      font-size: 14px;
      border-style: dashed;
      &:hover {
        border-radius: 0;
        box-shadow: none;
        background: transparent;
        border-color: var(--stroke-action-primary);
        color: var(--text-action-primary);
        border-style: dashed;
      }
    `}
  ${({ size }) =>
    size === 'large' &&
    css`
      height: 40px;
      padding: 6.4px 15px;
      font-size: 16px;
    `}
 
  ${({ size }) =>
    size === 'small' &&
    css`
      height: 24px;
      padding: 0 7px;
      font-size: 14px;
    `}
`;
