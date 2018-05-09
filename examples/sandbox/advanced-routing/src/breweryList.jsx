import React from "react";

import { pages } from "./navigation";

export const createBreweryList = (actions, router) => ({
  view: model => {
    return (
      <ul>
        {model.breweryList.map(brewery =>
          <li key={brewery.id}>
            <a href={router.getLink(pages.breweryDetails.id, {breweryId: brewery.id})}
            >{brewery.title}</a>
            {" "}
            <button className="btn btn-default btn-xs"
              onClick={actions.breweryDetails({breweryId: brewery.id})}>
              {brewery.title}
            </button>
          </li>
        )}
      </ul>
    );
  }
});
