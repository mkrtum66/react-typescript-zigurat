import styled, { css } from 'styled-components';

export const WalletIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: inherit;
  font-family: inherit;
  width: fit-content;
  padding: 0.6em;
  border-radius: 30px;
  background: var(--background-l1);
  margin: 0 0.5em 0 0;
  svg {
    path {
      fill: var(--icon-secondary);
    }
  }
`;
export const ModalTitle = styled.h2`
  font-weight: bold;
  font-size: 21.5px;
  font-family: inherit;
  margin: 0;
  color: var(--text-header);
  display: flex;
  align-items: center;
`;
export const WalletButton = styled.button<{ isDark?: boolean }>`
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  margin: 0.33em auto;
  background: inherit;
  font-size: inherit;
  width: 18em;
  padding: 0.625em 1.25em;
  border-radius: 40px;
  cursor: pointer;
  color: inherit;
  line-height: 1.15;
  font-family: inherit;
  opacity: 1;
  transition: all 200ms;

  &:hover {
    box-shadow: 0 2px 10px 0 var(--boxShadow-primary);
  }
  ${({ isDark }) =>
    isDark &&
    css`
      ${WalletName} {
        color: #ffffff;
      }
      &:hover {
        box-shadow: none;
        ${WalletName} {
          color: #32c8db;
        }
      }
    `}
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 40px;
  width: 40px;
  line-height: 40px;
  font-family: inherit;
  img {
    max-height: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
`;
export const WalletName = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: inherit;
  margin-left: 0.66em;
  font-weight: bold;
  text-align: left;
  font-family: inherit;
  color: var(--text-secondary);
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
export const Quest = styled.p`
  color: var(--text-action-primary);
  font-size: 16px;
  font-family: inherit;
  margin-top: 22px;
  margin-bottom: 0;
  cursor: pointer;
`;
export const HiddenText = styled.p`
  color: var(--text-primary);
  font-size: 14px;
  margin: 10px 0 0 0;
  a {
    color: var(--text-action-primary);
  }
  .link {
    color: var(--text-action-primary);
  }
`;
