import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  white-space: pre;
  overflow: hidden;
  padding: 25px 20px;
  border: 1px solid var(--stroke-tertiary);
  transition: border-color 0.12s ease-out;
  cursor: pointer;
  &:hover {
    border: 1px solid var(--stroke-secondary);
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 110px;
  width: 110px;
  border-radius: 1px;
  margin-right: 20px;
  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;
export const DescriptionWrapper = styled.div`
  flex: 1 1 0%;
  min-width: 0px;
  font-weight: 400;
  .title {
    color: var(--text-primary);
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 21px;
  }
  .overflowed {
    max-height: 20px;
    color: var(--text-placeholder);
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const TooltipWrapper = styled.div`
  color: var(--text-primary);
  margin-left: 10px;
  .ant-tooltip-inner {
    color: var(--text-primary);
  }
`;
