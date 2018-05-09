import React from "react";

import { pages } from "./navigation";

export const createLoadBeerList = (actions, router) => ({
  view: model => (
    <div>
      <a href={router.getLink(pages.breweryBeerList.id, {breweryId: model.brewery.id})}
      >Load beer list</a>
      {" "}
      <button className="btn btn-default btn-xs"
        onClick={actions.loadBeerList({ breweryId: model.brewery.id })}>Load beer list</button>
    </div>
  )
});
