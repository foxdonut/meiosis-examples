import { createBeerList } from "./beerList";

export const createBeerListPage = (actions, router) => {
  const beerList = createBeerList(actions, router);

  return {
    view: model => (
      beerList.view(model)
    )
  };
};
