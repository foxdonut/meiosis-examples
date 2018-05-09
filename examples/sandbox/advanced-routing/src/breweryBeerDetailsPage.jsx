import React from "react";

import { createBreweryBeerListPage } from "./breweryBeerListPage.jsx";

export const createBreweryBeerDetailsPage = (update, navigation, router) => {
  const breweryBeerListPage = createBreweryBeerListPage(update, navigation, router);

  return {
    view: model => (
      <div>
        {breweryBeerListPage.view(model)}
        Details of beer {model.page.params.beerId}
      </div>
    )
  };
};
