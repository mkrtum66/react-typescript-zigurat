import styled from 'styled-components';

export const TrandingSection = styled.div`
  background-color: var(--background-tranding);
  margin: 150px 0;
  padding: 40px 40px 0 40px;
  @media (max-width: 767px) {
    padding-top: 80px;
  }
`;
export const HideTablet = styled.div`
  @media (max-width: 100px) {
    display: none;
  }
`;
export const Heading = styled.h3`
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 22px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: var(--text-header);
`;
