import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;

  h2 {
    margin-left: 30px;
  }

  .movireRow-left,
  .movireRow-right {
    position: absolute;
    width: 40px;
    height: 225px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.9s;
  }

  .movireRow-left {
    left: 0;
  }

  .movireRow-right {
    right: 0;
  }
`;

export const ListArea = styled.div`
  overflow-x: hidden; // tudo que passar da div será cortado
  padding-left: 30px;

  &:hover .movireRow-left,
  &:hover .movireRow-right {
    opacity: 1;
  }
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
