import styled from 'styled-components';

export const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.094);
`;
export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  .title {
    color: var(--text-action-primary);
    font-weight: 500;
    font-size: 14px;
  }
  .text {
    font-size: 11px;
    color: var(--text-secondary);
  }
`;
