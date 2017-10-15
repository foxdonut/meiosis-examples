import { createBreweryDetailsPage } from "./breweryDetailsPage";
import { createBeerList } from "./beerList";

export const createBreweryBeerListPage = (update, navigation) => {
  const breweryDetailsPage = createBreweryDetailsPage(update, navigation);

  return {
    view: model => {
      const beerList = createBeerList({
        beerDetails: beerId => _evt =>
          navigation.navigateToBreweryBeerDetails({
            breweryId: model.brewery.id,
            beerId: beerId
          })
      });

      return (
        <div>
          {breweryDetailsPage.view(model)}
          {beerList.view(model.brewery)}
        </div>
      );
    }
  };
};
