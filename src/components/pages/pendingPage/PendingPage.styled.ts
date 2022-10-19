import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const WaitingText = styled.div`
  color: var(--text-secondary);
  font-family: var(--text-secondary);
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 0 0.5rem;
  text-align: center;
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 30px;
`;
export const Dots = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 10px;
  .stage {
    position: relative;
    padding: 1rem 0;
    display: flex;
    align-items: center;
    .dot-falling {
      position: relative;
      left: -9999px;
      width: 3px;
      height: 3px;
      border-radius: 3px;
      background-color: var(--text-secondary);
      color: var(--text-secondary);
      box-shadow: 9999px 0 0 0 var(--text-secondary);
      animation: dotFalling 1s infinite linear;
      animation-delay: 0.1s;
      &::before,
      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
      }
      &::before {
        width: 3px;
        height: 3px;
        border-radius: 3px;
        background-color: var(--text-secondary);
        color: var(--text-secondary);
        animation: dotFallingBefore 1s infinite linear;
        animation-delay: 0s;
      }
      &::after {
        width: 3px;
        height: 3px;
        border-radius: 3px;
        background-color: var(--text-secondary);
        color: var(--text-secondary);
        animation: dotFallingAfter 1s infinite linear;
        animation-delay: 0.2s;
      }
      @keyframes dotFalling {
        0% {
          box-shadow: 9999px -10px 0 0 rgba(152, 128, 255, 0);
        }
        25%,
        50%,
        75% {
          box-shadow: 9999px 0 0 0 var(--text-secondary);
        }
        100% {
          box-shadow: 9999px 10px 0 0 rgba(152, 128, 255, 0);
        }
      }

      @keyframes dotFallingBefore {
        0% {
          box-shadow: 9992px -10px 0 0 rgba(152, 128, 255, 0);
        }
        25%,
        50%,
        75% {
          box-shadow: 9992px 0 0 0 var(--text-secondary);
        }
        100% {
          box-shadow: 9992px 10px 0 0 rgba(152, 128, 255, 0);
        }
      }

      @keyframes dotFallingAfter {
        0% {
          box-shadow: 10004px -10px 0 0 rgba(152, 128, 255, 0);
        }
        25%,
        50%,
        75% {
          box-shadow: 10004px 0 0 0 var(--text-secondary);
        }
        100% {
          box-shadow: 10004px 10px 0 0 rgba(152, 128, 255, 0);
        }
      }
    }
  }
`;
export const Equals = styled.p`
  text-align: center;
  font-size: 18px;
  margin-top: 30px;
`;
