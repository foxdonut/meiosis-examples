import { pages } from "./navigation";
import { createBreweryDetailsPage } from "./breweryDetailsPage";
import { createBeerList } from "./beerList";

export const createBreweryBeerListPage = (update, navigation, router) => {
  const breweryDetailsPage = createBreweryDetailsPage(update, navigation, router);

  return {
    view: model => {
      const beerList = createBeerList(
        { beerDetails: beerId => _evt =>
            navigation.navigateToBreweryBeerDetails({
              breweryId: model.brewery.id,
              beerId: beerId
            })
        },
        beerId => router.getLink(
          pages.breweryBeerDetails.id,
          {breweryId: model.brewery.id, beerId}
        )
      );

      return (
        <div>
          {breweryDetailsPage.view(model)}
          {beerList.view(model.brewery)}
        </div>
      );
    }
  };
};
