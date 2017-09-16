import UniversalRouter from "universal-router";
import generateUrls from "universal-router/generateUrls";

import { home } from "./home";
import { coffee } from "./coffee";
import { books } from "./books";
import { bookSummary } from "./bookSummary";
import { bookDetails } from "./bookDetails";

export const createRouter = update => {
  const display = page => ctx => page.display(update, ctx.params);

  const routes = [
    { path: "/", name: home.page.id, action: display(home) },
    { path: "/coffee/:id?", name: coffee.page.id, action: display(coffee) },
    { path: "/books", children: [
      { path: "/", name: books.page.id, action: display(books) },
      { path: "/:id", name: bookSummary.page.id, action: display(bookSummary) },
      { path: "/:id/details", name: bookDetails.page.id, action: display(bookDetails) }
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
