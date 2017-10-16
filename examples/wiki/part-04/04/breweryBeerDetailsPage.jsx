import { createBreweryBeerListPage } from "./breweryBeerListPage";

export const createBreweryBeerDetailsPage = (update, navigation) => {
  const breweryBeerListPage = createBreweryBeerListPage(update, navigation);

  return {
    view: model => (
      <div>
        {breweryBeerListPage.view(model)}
        Details of beer {model.page.params.beerId}
      </div>
    )
  };
};
