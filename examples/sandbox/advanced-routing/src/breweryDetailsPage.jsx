import React from "react";

import { createBreweryListPage } from "./breweryListPage.jsx";
import { createBreweryDetails } from "./breweryDetails.jsx";
import { createLoadBeerList } from "./loadBeerList.jsx";

export const createBreweryDetailsPage = (update, navigation, router) => {
  const breweryListPage = createBreweryListPage(update, navigation, router);
  const breweryDetails = createBreweryDetails();
  const loadBeerList = createLoadBeerList({
    loadBeerList: params => _evt => navigation.navigateToBreweryBeerList(params)//FIXME
  }, router);

  return {
    view: model => (
      <div>
        {breweryListPage.view(model)}
        {breweryDetails.view(model)}
        {loadBeerList.view(model)}
      </div>
    )
  };
};
