import { pages } from "./navigation";
import { createBeerList } from "./beerList";

export const createBeerListPage = (actions, router) => {
  const beerList = createBeerList(actions,
    beerId => router.getLink(pages.beerDetails.id, {beerId}));

  return {
    view: model => (
      beerList.view(model)
    )
  };
};
