import React, { useState } from "react";
import { Container, Item, List, ListArea } from "./styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export const MovieRow = ({ title, items, slug }) => {
  const [scrollx, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listw = items.results.length * 150;
    if (window.innerWidth - listw > x) {
      x = window.innerWidth - listw - 0;
    }
    setScrollX(x);
  };
  return (
    <Container key={slug}>
      <h2>{title}</h2>

      <ListArea>
        <div className="movireRow-left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>

        <div className="movireRow-right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
        <List
          className="moview--list"
          style={{
            marginLeft: scrollx,
            width: items.results.length * 150, //total * (150 => tamanho da foto)
          }}
        >
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
