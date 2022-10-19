import styled, { css } from 'styled-components';

export const LogoWrapper = styled.div`
  width: auto;
  height: 40px;
  ${({ height }: { height?: number }) =>
    height &&
    css`
      height: ${height}px;
    `}
`;

export const Image = styled.img`
  height: 100%;
  object-fit: contain;
  vertical-align: baseline;
`;
