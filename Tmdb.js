/* eslint-disable import/no-anonymous-default-export */
const API_KEY = "c91cd2b9d496f9e429ccdd8c677f61fb";
const API_BASE = "https://api.themoviedb.org/3";

// - originais da netflix
// - recomendados (trending)
// - em alta (top rated)
// - ação
// - comédia
// - Terror
// - Romance
// - Documentarios

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do netflix",
        items: [],
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: [],
      },
      {
        slug: "action",
        title: "Ação",
        items: [],
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: [],
      },
      {
        slug: "horror",
        title: "Terror",
        items: [],
      },
      {
        slug: "romance",
        title: "Romance",
        items: [],
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: [],
      },
    ];
  },
};
