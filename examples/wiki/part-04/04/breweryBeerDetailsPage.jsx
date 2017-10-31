import { createBreweryBeerListPage } from "./breweryBeerListPage";

export const createBreweryBeerDetailsPage = (update, navigation, router) => {
  const breweryBeerListPage = createBreweryBeerListPage(update, navigation, router);

  return {
    view: model => (
      <div>
        {breweryBeerListPage.view(model)}
        Details of beer {model.page.params.beerId}
      </div>
    )
  };
};
