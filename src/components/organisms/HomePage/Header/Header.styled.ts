import styled from 'styled-components';
import { Button } from 'antd';

export const BananaImage = styled.img`
  min-height: 300px;
  max-width: 100%;
  object-fit: contain;
`;
export const StyledButton = styled(Button)`
  background: var(--background-action-primary) !important;
  border-color: transparent !important;
  color: var(--text-over-action-primary) !important;
  &:hover {
    box-shadow: 0 8px 12px rgb(0 0 0 / 12%);
  }
`;
export const HideMobile = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
