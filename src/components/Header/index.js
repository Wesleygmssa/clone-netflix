import React from "react";
import { Container } from "./styles";
import User from "../../assets/img/user.png";

export const Header = ({ black }) => {
  return (
    <Container className={black ? "black" : ""}>
      <div className="logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
          />
        </a>
      </div>
      <div className="header-user">
        <a href="#">
          <img src={User} alt="usuário"></img>
        </a>
      </div>
    </Container>
  );
};
