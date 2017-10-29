import { createBreweryList } from "./breweryList";
//import { createBreweryDetails } from "./breweryDetails";
//import { createBeerList } from "./beerList";

export const createBreweryListPage = (update, navigation, router) => {
  const actions = {
    breweryDetails: params => _evt => navigation.navigateToBreweryDetails(params),
  };

  const breweryList = createBreweryList(actions, router);

  /*
  const beerList = createBeerList({
    beerDetails: id => _evt => navigation.navigateToBreweryBeerDetails({ beerId: id })
  });

  const breweryDetails = createBreweryDetails({
    beerList
  }, {
    loadBeerList: params => _evt => navigation.navigateToBreweryBeerList(params)
  });
  */

  return {
    view: model => (
      <div>
        <p>Breweries</p>
        {breweryList.view(model)}
      </div>
    )
  };
};
