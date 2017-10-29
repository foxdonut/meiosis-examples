import { createBreweryListPage } from "./breweryListPage";
import { createBreweryDetails } from "./breweryDetails";
import { createLoadBeerList } from "./loadBeerList";

export const createBreweryDetailsPage = (update, navigation, router) => {
  const breweryListPage = createBreweryListPage(update, navigation, router);
  const breweryDetails = createBreweryDetails();
  const loadBeerList = createLoadBeerList({
    loadBeerList: params => _evt => navigation.navigateToBreweryBeerList(params)//FIXME
  });

  return {
    view: model => (
      <div>
        {breweryListPage.view(model)}
        {breweryDetails.view(model)}
        {loadBeerList.view(model)}
      </div>
    )
  };
};
