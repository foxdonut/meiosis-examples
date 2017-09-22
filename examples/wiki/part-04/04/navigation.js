import { createServices } from "./services";

export const pages = {
  home: {
    id: "Home",
    tab: "Home"
  },
  beer: {
    id: "Beer",
    tab: "Beer"
  },
  beerDetails: {
    id: "BeerDetails",
    tab: "Beer"
  },
  brewery: {
    id: "Brewery",
    tab: "Brewery"
  }
};

export const createNavigation = update => {
  const services = createServices();

  const navigate = (page, params = {}) =>
    update(model => Object.assign(model, ({ page, params })));

  const navigateTo = page => params => navigate(page, params);

  const navigateToBeer = () => {
    services.loadBeer().then(beerList => {
      update(model => Object.assign(model, { beerList }));
      navigate(pages.beer);
    });
  };

  const navigateToBrewery = params => {
    services.loadBrewery().then(breweryList => {
      update(model => Object.assign(model, { breweryList }));
      navigate(pages.brewery, params);
    });
  };

  return {
    navigateToHome: navigateTo(pages.home),
    navigateToBeer,
    navigateToBeerDetails: navigateTo(pages.beerDetails),
    navigateToBrewery
  };
};
