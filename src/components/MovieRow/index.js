import React from "react";
import { Container, Item, List, ListArea } from "./styles";

export const MovieRow = ({ title, items, slug }) => {
  return (
    <Container key={slug}>
      <h2>{title}</h2>
      <ListArea>
        <List className="moview--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <Item key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </Item>
            ))}
        </List>
      </ListArea>
    </Container>
  );
};
