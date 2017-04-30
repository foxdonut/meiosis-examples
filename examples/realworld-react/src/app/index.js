import { createView } from "./view";
import { footer } from "../footer";
import { header } from "../header";
import { home } from "../home";

export const app = {
  model: () => ({
    article: null,
    articles: [],
    articlesCount: 0,
    comments: [],
    login: {},
    profile: {},
    register: {},
    tagFilter: "",
    tags: []
  }),

  create: update => {
    const components = {
      header: header.create(update),
      home: home.create(update),
      footer: footer.create(update)
    };

    return createView(update, components);
  }
};
