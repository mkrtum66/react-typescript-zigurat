import styled from 'styled-components';
export const SpinnerWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
`;
export const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: transparent;
  z-index: 99999;
  @keyframes ldio-fng734zjw3 {
    0 % {
      opacity: 1;
      backface-visibility: hidden;
      transform: translateZ(0) scale(1.5, 1.5);
    }
    100% {
      opacity: 0;
      backface-visibility: hidden;
      transform: translateZ(0) scale(1, 1);
    }
  }
  .ldio-fng734zjw3 div > div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--icon-brand-primary);
    animation: ldio-fng734zjw3 1s linear infinite;
  }
  .ldio-fng734zjw3 div:nth-child(1) > div {
    left: 164px;
    top: 92px;
    animation-delay: -0.9333333333333333s;
  }
  .ldio-fng734zjw3 > div:nth-child(1) {
    transform: rotate(0deg);
    transform-origin: 172px 100px;
  }
  .ldio-fng734zjw3 div:nth-child(2) > div {
    left: 158px;
    top: 121px;
    animation-delay: -0.8666666666666667s;
  }
  .ldio-fng734zjw3 > div:nth-child(2) {
    transform: rotate(24deg);
    transform-origin: 166px 129px;
  }
  .ldio-fng734zjw3 div:nth-child(3) > div {
    left: 140px;
    top: 146px;
    animation-delay: -0.8s;
  }
  .ldio-fng734zjw3 > div:nth-child(3) {
    transform: rotate(48deg);
    transform-origin: 148px 154px;
  }
  .ldio-fng734zjw3 div:nth-child(4) > div {
    left: 114px;
    top: 160px;
    animation-delay: -0.7333333333333333s;
  }
  .ldio-fng734zjw3 > div:nth-child(4) {
    transform: rotate(72deg);
    transform-origin: 122px 168px;
  }
  .ldio-fng734zjw3 div:nth-child(5) > div {
    left: 84px;
    top: 164px;
    animation-delay: -0.6666666666666666s;
  }
  .ldio-fng734zjw3 > div:nth-child(5) {
    transform: rotate(96deg);
    transform-origin: 92px 172px;
  }
  .ldio-fng734zjw3 div:nth-child(6) > div {
    left: 56px;
    top: 154px;
    animation-delay: -0.6s;
  }
  .ldio-fng734zjw3 > div:nth-child(6) {
    transform: rotate(120deg);
    transform-origin: 64px 162px;
  }
  .ldio-fng734zjw3 div:nth-child(7) > div {
    left: 34px;
    top: 134px;
    animation-delay: -0.5333333333333333s;
  }
  .ldio-fng734zjw3 > div:nth-child(7) {
    transform: rotate(144deg);
    transform-origin: 42px 142px;
  }
  .ldio-fng734zjw3 div:nth-child(8) > div {
    left: 22px;
    top: 107px;
    animation-delay: -0.4666666666666667s;
  }
  .ldio-fng734zjw3 > div:nth-child(8) {
    transform: rotate(168deg);
    transform-origin: 30px 115px;
  }
  .ldio-fng734zjw3 div:nth-child(9) > div {
    left: 22px;
    top: 77px;
    animation-delay: -0.4s;
  }
  .ldio-fng734zjw3 > div:nth-child(9) {
    transform: rotate(192deg);
    transform-origin: 30px 85px;
  }
  .ldio-fng734zjw3 div:nth-child(10) > div {
    left: 34px;
    top: 50px;
    animation-delay: -0.3333333333333333s;
  }
  .ldio-fng734zjw3 > div:nth-child(10) {
    transform: rotate(216deg);
    transform-origin: 42px 58px;
  }
  .ldio-fng734zjw3 div:nth-child(11) > div {
    left: 56px;
    top: 30px;
    animation-delay: -0.26666666666666666s;
  }
  .ldio-fng734zjw3 > div:nth-child(11) {
    transform: rotate(240deg);
    transform-origin: 64px 38px;
  }
  .ldio-fng734zjw3 div:nth-child(12) > div {
    left: 84px;
    top: 20px;
    animation-delay: -0.2s;
  }
  .ldio-fng734zjw3 > div:nth-child(12) {
    transform: rotate(264deg);
    transform-origin: 92px 28px;
  }
  .ldio-fng734zjw3 div:nth-child(13) > div {
    left: 114px;
    top: 24px;
    animation-delay: -0.13333333333333333s;
  }
  .ldio-fng734zjw3 > div:nth-child(13) {
    transform: rotate(288deg);
    transform-origin: 122px 32px;
  }
  .ldio-fng734zjw3 div:nth-child(14) > div {
    left: 140px;
    top: 38px;
    animation-delay: -0.06666666666666667s;
  }
  .ldio-fng734zjw3 > div:nth-child(14) {
    transform: rotate(312deg);
    transform-origin: 148px 46px;
  }
  .ldio-fng734zjw3 div:nth-child(15) > div {
    left: 158px;
    top: 63px;
    animation-delay: 0s;
  }
  .ldio-fng734zjw3 > div:nth-child(15) {
    transform: rotate(336deg);
    transform-origin: 166px 71px;
  }

  .ldio-fng734zjw3 {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
  .ldio-fng734zjw3 div {
    box-sizing: border-box;
  }
`;
