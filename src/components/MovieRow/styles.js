import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;

  h2 {
    margin-left: 30px;
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden; // tudo que passar da div será cortado
  padding-left: 30px;
`;

export const List = styled.div`
  width: 99999px;
  display: flex;
`;

export const Item = styled.div`
  width: 150px;
  cursor: pointer;

  img {
    width: 100%;
    transform: scale(0.9); //diminuido css para 90%;
    transition: transform ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }
`;
