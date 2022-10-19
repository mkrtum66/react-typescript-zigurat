import styled from 'styled-components';

export const WithButtonFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  input {
    width: 100%;
  }
  button {
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
  }
`;
