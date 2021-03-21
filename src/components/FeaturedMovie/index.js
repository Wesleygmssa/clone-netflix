/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FiPlayCircle, FiPlus } from "react-icons/fi";
import {
  Container,
  Title,
  FeaturedVertical,
  FeaturedInfo,
  Description,
  GroupButton,
} from "./styles";

export const FeaturedMovie = ({ item }) => {
  //   console.log(item);
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  return (
    <Container
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <FeaturedVertical>
        <div className="featured-horizontal">
          <Title>{item.original_name}</Title>
          <FeaturedInfo>
            <div className="featured-points">{item.vote_average} pontos</div>
            <div className="featured-year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </FeaturedInfo>
          <Description>{item.overview}</Description>
          <GroupButton>
            <a href={`/whatc/${item.id}`} className="watchbutton">
              <FiPlayCircle />
              Assistir
            </a>
            <a href={`/list/add/${item.id}`} className="mylistbutton">
              <FiPlus />
              Minha Lista
            </a>
          </GroupButton>
          <div className="genres">
            <strong>Gêneros:</strong>
            {genres.join(", ")}
          </div>
        </div>
      </FeaturedVertical>
    </Container>
  );
};
