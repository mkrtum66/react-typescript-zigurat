import styled, { css } from 'styled-components';

export const HomePageWrapper = styled.div``;

export const BigHeader = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  color: var(--text-header);
`;
export const SmallHeader = styled.h3`
  font-weight: 600;
  color: var(--text-header);
  ${({ fontSize }: { fontSize?: number }) =>
    fontSize &&
    css`
      font-size: ${fontSize}px;
    `}
`;
export const Image = styled.img`
  height: 40vh;
  max-height: 400px;
  min-height: 300px;
  max-width: 100%;
  object-fit: contain;
  object-position: center center;
  margin: 0 auto -10px;
  display: flex;
`;
