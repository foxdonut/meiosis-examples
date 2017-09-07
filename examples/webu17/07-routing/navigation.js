import _ from "lodash";
import { createServices } from "./services";

export const pages = {
  home: {
    id: "Home",
    tab: "Home"
  },
  coffee: {
    id: "Coffee",
    tab: "Coffee"
  },
  beer: {
    id: "Beer",
    tab: "Beer"
  },
  beerDetails: {
    id: "BeerDetails",
    tab: "Beer"
  }
};

export const createNavigation = update => {
  const services = createServices();

  const navigate = (page, params) =>
    update(model => _.assign(model, ({ page, params: params||{} })));

  const navigateTo = page => params => navigate(page, params);

  const navigateToCoffee = params => {
    services.loadCoffees().then(coffees => {
      update(model => _.set(model, "coffees", coffees));
      if (params && params.id) {
        services.loadCoffee(params).then(coffee => {
          update(model => _.set(model, "coffee", coffee.description));
        });
      }
      navigate(pages.coffee, params);
    });
  };

  const navigateToBeer = () => {
    services.loadBeer().then(beerList => {
      update(model => _.set(model, "beerList", beerList));
      navigate(pages.beer);
    });
  };

  return {
    navigateToHome: navigateTo(pages.home),
    navigateToCoffee,
    navigateToBeer,
    navigateToBeerDetails: navigateTo(pages.beerDetails)
  };
};
