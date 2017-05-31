import UniversalRouter from "universal-router";
import generateUrls from "universal-router/generateUrls";

import { home } from "./home";
import { coffee } from "./coffee";
import { books } from "./books";
import { bookDetails } from "./bookDetails";

export const createRouter = update => {
  const routes = [
    { path: "/", name: home.page.id, action: () => home.display(update) },
    { path: "/coffee/:id?", name: coffee.page.id,
      action: ctx => coffee.display(update, ctx.params)
    },
    { path: "/books", children: [
      { path: "/", action: ctx => books.display(update, ctx.params) },
      { path: "/:id", name: books.page.id,
        action: ctx => books.display(update, ctx.params)
      },
      { path: "/:id/details", name: bookDetails.page.id,
        action: ctx => bookDetails.display(update, ctx.params)
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
