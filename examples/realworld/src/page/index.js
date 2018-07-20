import { defaultTo } from "ramda";

import { createActions } from "realworld-common/src/page/actions";
import { layout } from "../layout";
import { home } from "../home";
import { login } from "../login";
import { register } from "../register";
import { settings } from "../settings";
import { articleDetail } from "../articleDetail";
import { articleEdit } from "../articleEdit";

import { nestComponent } from "../util";

export const page = {
  create: update => {
    const pages = {
      Home: home.create(update),
      Login: login.create(update),
      Register: register.create(update),
      Settings: settings.create(update),
      ArticleDetail: articleDetail.create(update),
      ArticleEdit: nestComponent(articleEdit.create, update, ["article"])
    };
    return layout.create(update, pages, defaultTo(pages.Home));
  },
  createActions
};
