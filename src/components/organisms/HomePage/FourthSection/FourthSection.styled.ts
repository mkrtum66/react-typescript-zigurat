import styled from 'styled-components';

export const PinaImage = styled.img`
  max-height: 480px;
  max-width: 100%;
  object-fit: contain;
  margin-bottom: 40px;
`;
export const Grid = styled.div`
  display: grid;
  row-gap: 20px;
  margin-bottom: 40px;
`;
export const FourthCol = styled.div`
  h3 {
    font-weight: 600;
    margin: 0;
    color: var(--text-header);
  }
  p {
    margin-bottom: 0;
    margin-top: 5px;
    a {
      color: var(--text-action-primary);
      font-weight: 600;
    }
  }
`;
