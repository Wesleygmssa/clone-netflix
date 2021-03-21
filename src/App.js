import React, { useEffect, useState } from "react";
import { Container, Page } from "./styles";
import { Tmdb } from "./Tmdb";

export const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      console.log(list);
    };

    loadAll();
  }, []);
  return (
    <Container>
      <Page>
        <Header></Header>
        <Emphasis></Emphasis>
        <List></List>
        <Footer></Footer>
      </Page>
    </Container>
  );
};
