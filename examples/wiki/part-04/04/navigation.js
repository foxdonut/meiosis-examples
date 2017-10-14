import { createServices } from "./services";

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

  const navigate = (page, params = {}) =>
    update(model => Object.assign(model, ({ page, params })));

  const navigateTo = page => params => navigate(page, params);

  const navigateToBeerList = () =>
    services.loadBeerList().then(beerList => {
      update(model => Object.assign(model, { beerList }));
      navigate(pages.beerList);
    });

  const navigateToBreweryList = params => {
    if (params && params.breweryId) {
      update(model => Object.assign(model, { brewery: { id: params.breweryId } }));
      navigate(pages.breweryList, params);
    }
    else {
      services.loadBreweryList().then(breweryList => {
        update(model => Object.assign(model, { breweryList }));
        navigate(pages.breweryList, params);
      });
    }
  };

  const navigateToBreweryBeerList = params =>
    services.loadBeerList(params.breweryId).then(beerList => {
      update(model => Object.assign(model, { brewery: { id: params.breweryId, beerList } }));
      navigate(pages.breweryList, params);
    });

  return {
    navigateToHome: navigateTo(pages.home),
    navigateToBeerList,
    navigateToBeerDetails: navigateTo(pages.beerDetails),
    navigateToBreweryList,
    navigateToBreweryBeerList,
    navigateToBreweryBeerDetails: navigateTo(pages.breweryDetails)
  };
};
