import styled from 'styled-components';
import { Button } from 'antd';

export const StyledUploadButton = styled(Button)`
  border: none !important;
  background-color: transparent !important;
  box-shadow: none !important;
  display: flex;
  color: var(--text-over-action-secondary) !important;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  &:after {
    display: none !important;
  }
  svg {
    margin: 0 10px;
    path {
      fill: var(--text-over-action-secondary);
    }
  }
`;
export const Label = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
`;
