import React from "react";
import { Container } from "./styles";
import User from "../../assets/img/user.png";
import { Link } from "react-router-dom";

export const Header = ({ black }) => {
  return (
    <Container className={black ? "black" : ""}>
      <div className="logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header-user">
        <Link to="#">
          <img src={User} alt="usuário"></img>
        </Link>
      </div>
    </Container>
  );
};
