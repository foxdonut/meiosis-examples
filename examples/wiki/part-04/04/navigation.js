import * as R from "ramda";
import uuidv1 from "uuid/v1";

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

export const createNavigation = (update, action) => {
  const services = createServices();

  const navigateToBeerList = () => action(latestModel => {
    if (latestModel.beerList) {
      update(
        transforms.navigate(pages.beerList)
      );
    }
    else {
      const uuid = uuidv1();
      update(
        R.pipe(
          transforms.uuid(uuid),
          transforms.pleaseWaitBegin
        )
      );

      services.loadBeerList().then(beerList => action(latestModel => {
        if (latestModel.uuid === uuid) {
          update(
            R.pipe(
              transforms.beerList(beerList),
              transforms.navigate(pages.beerList),
              transforms.pleaseWaitEnd
            )
          )
        }
      }));
    }
  });

  const navigateToBreweryList = params => action(latestModel => {
    if (latestModel.breweryList) {
      update(
        transforms.navigate(pages.breweryList, params)
      );
    }
    else {
      const uuid = uuidv1();
      update(
        R.pipe(
          transforms.uuid(uuid),
          transforms.pleaseWaitBegin
        )
      );

      services.loadBreweryList().then(breweryList => action(latestModel => {
        if (latestModel.uuid === uuid) {
          update(
            R.pipe(
              transforms.breweryList(breweryList),
              transforms.navigate(pages.breweryList, params),
              transforms.pleaseWaitEnd
            )
          )
        }
      }));
    }
  });

  const trBreweryList = breweryList =>
    R.pipe(
      transforms.breweryList(breweryList),
      transforms.pleaseWaitEnd
    );

  const trBrewery = params =>
    R.pipe(
      transforms.brewery(params),
      transforms.navigate(pages.breweryDetails, params)
    );

  const navigateToBreweryDetails = params => action(latestModel => {
    R.applyTo(
      latestModel,
      R.ifElse(
        R.has("breweryList"),
        R.partial(update, [trBrewery(params)]),
        () => {
          update(transforms.pleaseWaitBegin);

          services.loadBreweryList().then(
            R.pipe(
              trBreweryList,
              R.o(trBrewery(params)),
              update
            )
          );
        }
      )
    );
  });

  const navigateToBreweryBeerList = params => action(latestModel => {
    if (latestModel.breweryList && latestModel.brewery.id === params.breweryId && latestModel.brewery.beerList) {
      update(
        transforms.navigate(pages.breweryBeerList, params)
      );
    }
    else {
      update(transforms.pleaseWaitBegin);

      Promise.all([services.loadBreweryList(), services.loadBeerList(params.breweryId)]).then(values => {
        const breweryList = values[0];
        const beerList = values[1];

        update(
          R.pipe(
            transforms.breweryList(breweryList),
            transforms.brewery(params),
            transforms.breweryBeerList(params, beerList),
            transforms.navigate(pages.breweryBeerList, params),
            transforms.pleaseWaitEnd
          )
        );
      });
    }
  });

  const navigateToBreweryBeerDetails = params => action(latestModel => {
    if (latestModel.breweryList && latestModel.brewery.id === params.breweryId && latestModel.brewery.beerList) {
      update(
        transforms.navigate(pages.breweryBeerDetails, params)
      );
    }
    else {
      update(transforms.pleaseWaitBegin);

      Promise.all([services.loadBreweryList(), services.loadBeerList(params.breweryId)]).then(values => {
        const breweryList = values[0];
        const beerList = values[1];

        update(
          R.pipe(
            transforms.breweryList(breweryList),
            transforms.brewery(params),
            transforms.breweryBeerList(params, beerList),
            transforms.navigate(pages.breweryBeerDetails, params),
            transforms.pleaseWaitEnd
          )
        );
      });
    }
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
