import UniversalRouter from "universal-router";
import generateUrls from "universal-router/generateUrls";

import { home } from "./home";
import { login } from "./login";
import { items } from "./items";
import { itemDetails } from "./itemDetails";

export const createRouter = update => {
  const routes = [
    { path: "/", name: home.page.id, action: () => home.display(update) },
    { path: "/login", name: login.page.id, action: () => login.display(update) },
    { path: "/items", children: [
      { path: "/", action: ctx => items.display(update, ctx.params) },
      { path: "/:id?", name: items.page.id,
        action: ctx => items.display(update, ctx.params)
      },
      { path: "/:id/details", name: itemDetails.page.id,
        action: ctx => itemDetails.display(update, ctx.params)
      }
    ]}
  ];

  const router = new UniversalRouter(routes);

  const resolveRoute = () => {
    const route = document.location.hash.substring(1);
    router.resolve(route);
  };

  window.onpopstate = resolveRoute;


  const urlGenerator = generateUrls(router);

  const routeSync = model => {
    const route = urlGenerator(model.page.id, model.params || {});
    if (document.location.hash.substring(1) !== route) {
      window.history.pushState({}, "", "#" + route);
    }
  };

  return { resolveRoute, routeSync };
};
