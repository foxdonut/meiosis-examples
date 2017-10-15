import { createBeerList } from "./beerList";

export const createBeerListPage = actions => {
  const beerList = createBeerList(actions);

  return {
    view: model => (
      beerList.view(model)
    )
  };
};
