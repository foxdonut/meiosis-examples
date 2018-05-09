import React from "react";

import { createBeerDetails } from "./beerDetails.jsx";
import { createBackToBeerList } from "./backToBeerList.jsx";

export const createBeerDetailsPage = (update, navigation, router) => {
  const actions = {
    navigateToBeerList: () => navigation.navigateToBeerList()
  };

  const beerDetails = createBeerDetails();
  const backToBeerList = createBackToBeerList(actions, router);

  return {
    view: model => (
      <div>
        {beerDetails.view(model)}
        {backToBeerList.view(model)}
      </div>
    )
  };
};
