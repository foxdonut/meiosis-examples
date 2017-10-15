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
  breweryDetailsBeerList: {
    id: "BreweryDetailsBeerListPage",
    tab: "Brewery"
  },
  breweryDetailsBeerDetails: {
    id: "BreweryDetailsBeerDetailsPage",
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
    update(
      R.pipe(
        transforms.brewery(params),
        transforms.navigate(pages.breweryDetails, params)
      )
    );
  };

  const navigateToBreweryBeerList = params =>
    services.loadBeerList(params.breweryId).then(beerList =>
      update(
        R.pipe(
          transforms.breweryBeerList(params, beerList),
          transforms.navigate(pages.breweryDetailsBeerList, params)
        )
      )
    );

  const navigateTo = page => params => update(transforms.navigate(page, params));

  return {
    navigateToHome: navigateTo(pages.home),
    navigateToBeerList,
    navigateToBeerDetails: navigateTo(pages.beerDetails),
    navigateToBreweryList,
    navigateToBreweryDetails,
    navigateToBreweryBeerList,
    navigateToBreweryBeerDetails: navigateTo(pages.breweryDetails)
  };
};
