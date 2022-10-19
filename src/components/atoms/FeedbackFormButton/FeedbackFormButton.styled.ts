import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  background-color: var(--background-l0);
  right: 56px;
  bottom: 40px;
  padding: 4px 10px;
  width: 70px;
  height: 70px;
  margin: 3px;
  box-shadow: 0 8px 12px rgb(0 0 0 / 10%);
  border-radius: 100%;
  transition: 0.3s;
  cursor: pointer;
`;
export const FeedbackButton = styled.span`
  position: fixed;
  background-color: var(--background-l0);
  right: 56px;
  bottom: 40px;
  padding: 4px 10px;
  width: 70px;
  height: 70px;
  margin: 3px;
  box-shadow: 0 8px 12px rgb(0 0 0 / 10%);
  border-radius: 100%;
  transition: 0.3s;
  cursor: pointer;
  img {
    width: 60px;
    margin-left: -3px;
    height: 100%;
    object-fit: contain;
    transition: 0.3s;
  }
  &.ant-tooltip-open {
    transform: scale(1.05);
  }
  &.dark {
    background-color: var(--background-l2);
    box-shadow: 0 8px 12px #000;
  }
`;
