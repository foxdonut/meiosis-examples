import React from "react";

import { createBreweryList } from "./breweryList.jsx";

export const createBreweryListPage = (update, navigation, router) => {
  const actions = {
    breweryDetails: params => _evt => navigation.navigateToBreweryDetails(params),
  };

  const breweryList = createBreweryList(actions, router);

  return {
    view: model => (
      <div>
        <p>Breweries</p>
        {breweryList.view(model)}
      </div>
    )
  };
};
