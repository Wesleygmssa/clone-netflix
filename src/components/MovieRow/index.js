import React from "react";
import { Container, Item, List, ListArea } from "./styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export const MovieRow = ({ title, items, slug }) => {
  const handleLeftArrow = () => {};

  const handleRightArrow = () => {};
  return (
    <Container key={slug}>
      <h2>{title}</h2>

      <ListArea>
        <div className="movireRow-left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>

        <div className="movireRow-right" nClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
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
