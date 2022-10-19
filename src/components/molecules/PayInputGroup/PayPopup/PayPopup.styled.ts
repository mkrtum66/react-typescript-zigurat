import styled from 'styled-components';

export const PayPopupWrapper = styled.div`
  .pay-modal-wrapper {
    .ant-modal-title {
      font-weight: 500;
      font-size: 21px;
    }
    .ant-modal-body {
      padding-top: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      span {
        font-weight: 500;
      }
      h4 {
        color: var(--text-header);
        font-size: 14px;
        margin-bottom: 5px;
      }
      table,
      th,
      td {
        border: 1px solid var(--stroke-secondary);
        border-collapse: collapse;
        padding: 16px 24px;
        font-size: 14px;
        line-height: 1.5715;
      }
      table thead tr th:first-child,
      table tbody tr td:first-child {
        text-align: start;
        font-weight: 600;
        color: var(--text-secondary);
      }
      table thead tr th:last-child,
      table tbody tr td:last-child {
        text-align: end;
        font-weight: 400;
        color: var(--text-primary);
      }
    }
  }
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 14px;
  color: var(--text-primary);
`;
export const TextGray = styled.p`
  font-size: 14px;
  margin-bottom: 14px;
  color: var(--text-secondary);
`;
export const Risk = styled.div`
  padding: 16px;
  background-color: var(--background-tranding1);
  h4 {
    display: flex;
    align-items: center;
    font-size: 14px !important;
    margin-bottom: 14px !important;
    color: var(--text-primary) !important;
  }
  ul li {
    color: var(--text-primary);
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  .btcpay-form {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .btcpay-form--inline {
    flex-direction: row;
  }
  .btcpay-form--block {
    flex-direction: column;
  }
  .btcpay-form--inline .submit {
    margin-left: 15px;
  }
  .btcpay-form--block select {
    margin-bottom: 10px;
  }
  .btcpay-form .btcpay-custom-container {
    text-align: center;
  }
  .btcpay-custom {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btcpay-form .plus-minus {
    cursor: pointer;
    font-size: 25px;
    line-height: 25px;
    background: #dfe0e1;
    height: 30px;
    width: 45px;
    border: none;
    border-radius: 60px;
    margin: auto 5px;
    display: inline-flex;
    justify-content: center;
  }
  .btcpay-form select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    color: currentColor;
    background: transparent;
    border: 1px solid transparent;
    display: block;
    padding: 1px;
    margin-left: auto;
    margin-right: auto;
    font-size: 11px;
    cursor: pointer;
  }
  .btcpay-form select:hover {
    border-color: #ccc;
  }
  .btcpay-form option {
    color: #000;
    background: rgba(0, 0, 0, 0.1);
  }
  .btcpay-input-price {
    -moz-appearance: textfield;
    border: none;
    box-shadow: none;
    text-align: center;
    font-size: 25px;
    margin: auto;
    border-radius: 5px;
    line-height: 35px;
    background: #fff;
  }
  .btcpay-input-price::-webkit-outer-spin-button,
  .btcpay-input-price::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
