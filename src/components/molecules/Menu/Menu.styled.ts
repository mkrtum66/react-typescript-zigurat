import styled from 'styled-components';

export const MenuWrapper = styled.div`
  margin-top: -18px;
  padding: 0;
  border-radius: 1px;
  background-color: var(--background-l0);
  border: 1px solid var(--stroke-tertiary);
  box-shadow: 0 8px 12px var(--boxShadow-primary);
`;
export const Item = styled.span`
  display: block;
  font-size: 14px;
  padding: 10px 15px;
  color: var(--text-primary);
  font-weight: 500;
  &:hover {
    background-color: var(--background-l1);
  }
`;
export const DropDownLink = styled.a`
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: var(--text-primary);
  &:hover {
    color: var(--text-primary);
    opacity: 0.7;
  }
  p {
    margin: 0 7px 0 0;
  }
  &.ant-dropdown-open {
    .anticon-down {
      transform: rotate(180deg);
    }
  }
`;
