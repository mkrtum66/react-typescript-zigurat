import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  .ant-radio-group {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-primary);
    background: transparent;
    transition: all 0.3s;
    .ant-radio-button-wrapper {
      font-size: 14px;
      font-weight: 400;
      color: var(--text-primary);
      background: transparent !important;
      border-color: var(--stroke-tertiary) !important;
      transition: all 0.3s;
      &.ant-radio-button-wrapper:not(:first-child)::before {
        background: transparent !important;
      }
      &:first-child {
        border-left: 1px solid var(--stroke-tertiary) !important;
        border-radius: 2px 0 0 2px;
      }
      &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
        font-weight: 500;
        span {
          transform: scale(1.05);
          display: block;
        }
      }
      &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
        background: transparent;
      }
      &:focus-within {
        box-shadow: none !important;
      }
    }
  }
`;
export const StyledLabel = styled.label`
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
