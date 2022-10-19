import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display: grid;
  row-gap: 20px;
  padding: 30px;
  background: black;
  text-align: center;
`;
export const Footerheader = styled.div`
  background: black;
  padding: 40px;
  text-align: center;
  & > div {
    font-size: 20px;
    margin-bottom: 20px;
  }
  h3 {
    color: white;
    margin: 0px;
  }
`;
export const FooterContent = styled.div`
  display: grid;
  row-gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
  span {
    a {
      color: rgb(24, 180, 199);
      margin-left: 10px;
      margin-right: 10px;
      font-weight: 600;
    }
  }
`;
export const FooterBottom = styled.div`
  display: flex;
  row-gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
  a {
    color: rgb(24, 180, 199);
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 600;
  }
`;
