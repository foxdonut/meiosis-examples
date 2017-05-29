import m from "mithril";

import { home } from "./home";
import { login } from "./login";
import { items } from "./items";
import { itemDetails } from "./itemDetails";

export const app = {
  model: () => ({
    page: home.page,
    params: {}
  }),

  create: update => {
    const pageMap = [home, login, items, itemDetails].reduce(
      (acc, next) => {
        acc[next.page.id] = next.create(update);
        return acc;
      }, {}
    );

    return model => {
      const currentPageId = pageMap[model.page.id] ? model.page.id : home.page.id;
      const currentTab = model.page.tab;
      const page = pageMap[currentPageId];
      const isActive = tab => tab === currentTab ? ".active" : "";

      return m("div",
        m("nav.navbar.navbar-default",
          m("ul.nav.navbar-nav",
            m("li" + isActive(home.page.id),
              m("a[href='#/']", "Home")
            ),
            m("li" + isActive(login.page.id),
              m("a[href='#/login']", "Login")
            ),
            m("li" + isActive(items.page.id),
              m("a[href='#/items']", "Items")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: () => home.display(update) }, "Home")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: () => login.display(update) }, "Login")
            ),
            m("li.btn",
              m("button.btn.btn-default",
                { onclick: () => items.display(update, {}) }, "Items")
            )
          )
        ),
        page(model)
      );
    };
  }
};
