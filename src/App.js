import { GlobalStyle } from "./components/styles/global";
import React, { useEffect, useState } from "react";
import { Container, Page, List } from "./styles";
import { Tmdb } from "./Tmdb";
import { MovieRow } from "./components/MovieRow";
import { FeaturedMovie } from "./components/FeaturedMovie";

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //filmse destake feature
      let originals = list.filter((item) => item.slug === "originals");
      let randomCho;
      console.log(list);
    };

    loadAll();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Page>
          {featureData && <FeaturedMovie item={featureData} />}
          <List>
            {movieList.map((item, key) => (
              <MovieRow key={item.slug} title={item.title} items={item.items} />
            ))}
          </List>
        </Page>
      </Container>
    </>
  );
};
