import styled from 'styled-components';
import { Button } from 'antd';

export const LinkButton = styled(Button)`
  padding: 0;
  height: auto;
  color: var(--text-action-primary);
  span {
    color: var(--text-action-primary);
  }
`;
export const ParagraphText = styled.span`
  color: var(--text-secondary);
  overflow-wrap: break-word;
  padding-right: 0.5rem;
`;
