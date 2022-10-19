import styled from 'styled-components';

export const YesOrNo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  p {
    font-size: 14px;
    font-weight: 400;
    color: var(--text-primary);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    margin: 0;
    &.active {
      font-weight: 500;
    }
  }
`;
