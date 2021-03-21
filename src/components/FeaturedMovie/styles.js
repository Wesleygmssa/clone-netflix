import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.section`
  height: 100vh;
`;
export const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);

  .featured-horizontal {
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 10%, transparent 90%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;

    .genres {
      margin-top: 15px;
      font-size: 18px;
      color: #999;
    }
  }
`;
export const Title = styled.h2`
  font-size: 60px;
  font-weight: bold;
`;
export const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;

  .featured-points {
    display: inline-block;
    color: #46d369;
    margin-right: 15px;
  }
  .featured-year {
    display: inline-block;
    margin-right: 15px;
  }
  .featured-seasons {
    display: inline;
    margin-right: 15px;
  }
`;
export const Description = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
`;
export const GroupButton = styled.div`
  margin-top: 15px;
  display: flex;
  opacity: 1;
  .watchbutton,
  .mylistbutton {
    display: flex;
    align-items: center;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;

    svg {
      margin-right: 5px;
    }
  }

  .watchbutton {
    background: #fff;
    color: #000;
    transition: background ease 0.2s;

    &:hover {
      background: ${transparentize(0.2, "#fff")};
    }
  }

  .mylistbutton {
    background: #333;
    color: #fff;
    transition: background ease 0.2s;

    &:hover {
      background: ${transparentize(0.2, "#333")};
    }
  }
`;
