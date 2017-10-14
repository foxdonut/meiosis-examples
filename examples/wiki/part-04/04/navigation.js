import * as R from "ramda";
import { createServices } from "./services";
import { transforms } from "./transforms";

export const pages = {
  home: {
    id: "Home",
    tab: "Home"
  },
  beerList: {
    id: "BeerList",
    tab: "Beer"
  },
  beerDetails: {
    id: "BeerDetails",
    tab: "Beer"
  },
  breweryList: {
    id: "BreweryList",
    tab: "Brewery"
  },
  breweryDetails: {
    id: "BreweryDetails",
    tab: "Brewery"
  },
  breweryDetailsBeerList: {
    id: "BreweryDetailsBeerList",
    tab: "Brewery"
  },
  breweryDetailsBeerDetails: {
    id: "BreweryDetailsBeerDetails",
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
    if (params && params.breweryId) {
      update(
        R.pipe(
          transforms.brewery(params),
          transforms.navigate(pages.breweryList, params)
        )
      );
    }
    else {
      services.loadBreweryList().then(breweryList =>
        update(
          R.pipe(
            transforms.breweryList(breweryList),
            transforms.navigate(pages.breweryList, params)
          )
        )
      );
    }
  };

  const navigateToBreweryBeerList = params =>
    services.loadBeerList(params.breweryId).then(beerList =>
      update(
        R.pipe(
          transforms.breweryBeerList(params, beerList),
          transforms.navigate(pages.breweryList, params)
        )
      )
    );

  const navigateTo = page => params => update(transforms.navigate(page, params));

  return {
    navigateToHome: navigateTo(pages.home),
    navigateToBeerList,
    navigateToBeerDetails: navigateTo(pages.beerDetails),
    navigateToBreweryList,
    navigateToBreweryBeerList,
    navigateToBreweryBeerDetails: navigateTo(pages.breweryDetails)
  };
};
