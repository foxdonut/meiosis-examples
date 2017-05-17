import { defaultTo } from "ramda";

import { createActions } from "./actions";

import { layout } from "../layout";
import { home } from "../home";
import { login } from "../login";
import { register } from "../register";
import { articleDetail } from "../articleDetail";

export const page = {
  create: update => {
    const pages = {
      Home: home.create(update),
      Login: login.create(update),
      Register: register.create(update),
      ArticleDetail: articleDetail.create(update)
    };
    return layout.create(update, pages, defaultTo(pages.Home));
  },

  createActions
};
