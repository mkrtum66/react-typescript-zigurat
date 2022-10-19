import styled from 'styled-components';
import { Col } from 'antd';

export const Item = styled.div`
  display: flex;
  align-items: center;
  white-space: pre;
  height: 100%;
  overflow: hidden;
  padding: 25px 20px;
  border: 1px solid var(--stroke-tertiary);
  transition: border-color 0.12s ease-out;
  &:hover {
    border: 1px solid var(--stroke-secondary);
  }
`;
export const Left = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;
export const Right = styled.div`
  flex: 1 1 0;
  min-width: 0;
  font-weight: 400;
`;
export const Number = styled.div`
  font-size: 22px;
  color: var(--text-primary);
  font-weight: 400;
  margin-right: 15px;
  width: 25px;
  text-align: center;
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 70px;
  width: 70px;
  border-radius: 1px;
`;
export const Image = styled.img`
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  object-position: center center;
`;
export const ItemTitle = styled.h2`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: var(--text-primary);
`;
export const Desc = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  color: var(--text-primary);
`;
export const OrangeText = styled.span`
  font-weight: 600;
  color: var(--text-brand-primary);
`;
export const Payments = styled.div`
  font-weight: 400;
  color: var(--text-primary);
  font-size: 13px;
  margin-top: 2px;
`;
export const StyledCol = styled(Col)`
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 10px;
`;
export const ButtonWrapper = styled.div`
  margin: 15px 5px 40px;
`;
