import Mapper from "url-mapper";

import { home } from "./home";
import { coffee } from "./coffee";
import { books } from "./books";
import { bookSummary } from "./bookSummary";
import { bookDetails } from "./bookDetails";

export const createRouter = update => {
  const urlMapper = Mapper();

  const routes = {
    "/": home,
    "/coffee/:id?": coffee,
    "/books": books,
    "/books/:id": bookSummary,
    "/books/:id/details": bookDetails
  };

  const resolveRoute = () => {
    const route = document.location.hash.substring(1);
    const resolved = urlMapper.map(route, routes);
    if (resolved) {
      const page = resolved.match;
      page.display(update, resolved.values);
    }
  };

  window.onpopstate = resolveRoute;

  return { resolveRoute };
};
