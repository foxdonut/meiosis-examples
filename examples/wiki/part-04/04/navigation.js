import * as R from "ramda";
import { createServices } from "./services";
import { transforms } from "./transforms";

export const pages = {
  home: {
    id: "HomePage",
    tab: "Home"
  },
  beerList: {
    id: "BeerListPage",
    tab: "Beer"
  },
  beerDetails: {
    id: "BeerDetailsPage",
    tab: "Beer"
  },
  breweryList: {
    id: "BreweryListPage",
    tab: "Brewery"
  },
  breweryDetails: {
    id: "BreweryDetailsPage",
    tab: "Brewery"
  },
  breweryBeerList: {
    id: "BreweryBeerListPage",
    tab: "Brewery"
  },
  breweryBeerDetails: {
    id: "BreweryBeerDetailsPage",
    tab: "Brewery"
  }
};

export const createNavigation = update => {
  const services = createServices();

  const navigateToBeerList = () =>
    services.loadBeerList().then(beerList =>
      update(
        R.pipe(
          transforms.beerList(beerList),
          transforms.navigate(pages.beerList)
        )
      )
    );

  const navigateToBreweryList = params => {
    services.loadBreweryList().then(breweryList =>
      update(
        R.pipe(
          transforms.breweryList(breweryList),
          transforms.navigate(pages.breweryList, params)
        )
      )
    );
  };

  const navigateToBreweryDetails = params => {
    services.loadBreweryList().then(breweryList =>
      update(
        R.pipe(
          transforms.breweryList(breweryList),
          transforms.brewery(params),
          transforms.navigate(pages.breweryDetails, params)
        )
      )
    );
  };

  const navigateToBreweryBeerList = params =>
    Promise.all([services.loadBreweryList(), services.loadBeerList(params.breweryId)]).then(values => {
      const breweryList = values[0];
      const beerList = values[1];

      update(
        R.pipe(
          transforms.breweryList(breweryList),
          transforms.brewery(params),
          transforms.breweryBeerList(params, beerList),
          transforms.navigate(pages.breweryBeerList, params)
        )
      );
    });

  const navigateToBreweryBeerDetails = params =>
    Promise.all([services.loadBreweryList(), services.loadBeerList(params.breweryId)]).then(values => {
      const breweryList = values[0];
      const beerList = values[1];

      update(
        R.pipe(
          transforms.breweryList(breweryList),
          transforms.brewery(params),
          transforms.breweryBeerList(params, beerList),
          transforms.navigate(pages.breweryBeerDetails, params)
        )
      );
    });

  const navigateTo = page => params => update(transforms.navigate(page, params));

  return {
    navigateToHome: navigateTo(pages.home),
    navigateToBeerList,
    navigateToBeerDetails: navigateTo(pages.beerDetails),
    navigateToBreweryList,
    navigateToBreweryDetails,
    navigateToBreweryBeerList,
    navigateToBreweryBeerDetails
  };
};
