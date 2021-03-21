import styled from "styled-components";

export const Container = styled.div``;

export const Page = styled.div``;

export const List = styled.section`
  margin-top: -120px;
`;
export const Footer = styled.footer`
  margin: 50px 0;
  text-align: center;
  svg {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
  }
`;
