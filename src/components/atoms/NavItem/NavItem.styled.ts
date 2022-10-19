import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Item = styled(NavLink)`
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
    margin-left: 10px;
    margin-bottom: 0;
    color: var(--text-primary);
    font-weight: 500;
    &:hover {
      color: var(--text-primary);
      opacity: 0.7;
    }
  }
`;
