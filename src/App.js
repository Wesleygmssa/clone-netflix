import { GlobalStyle } from "./components/styles/global";
import React, { useEffect, useState } from "react";
import { Container, Page, List } from "./styles";
import { Tmdb } from "./Tmdb";
import { MovieRow } from "./components/MovieRow";
import { FeaturedMovie } from "./components/FeaturedMovie";
import { Header } from "./components/Header";

export const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //filmse destaque feature
      let originals = list.filter((item) => item.slug === "originals");

      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      //Aqui o filme aleatorio
      let chosen = originals[0].items.results[randomChosen];
      //pegando o filme destaque
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeatureData(chosenInfo);

      // console.log(featureData);
      // console.log(MoviechosenchosenInfo);
      // console.log(chosen);
      // console.log(list);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Page>
          <Header black={blackHeader} />
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
