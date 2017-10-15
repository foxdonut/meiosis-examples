import { createBreweryDetailsPage } from "./breweryDetailsPage";
import { createBeerList } from "./beerList";

export const createBreweryDetailsBeerListPage = (update, navigation) => {
  const breweryDetailsPage = createBreweryDetailsPage(update, navigation);
  const beerList = createBeerList({
    beerDetails: beerId => _evt => null
  });

  return {
    view: model => (
      <div>
        {breweryDetailsPage.view(model)}
        {beerList.view(model.brewery)}
      </div>
    )
  };
};
