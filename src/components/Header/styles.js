import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0px 30px;
  background: transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ease 0.5s;

  &.black {
    background: #141414;
  }

  .logo {
    height: 25px;

    img {
      height: 100%;
    }
  }

  .header-user {
    height: 35px;

    img {
      height: 100%;
      border-radius: 3px;
    }
  }
`;
