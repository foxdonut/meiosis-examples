import React from "react";

import { pages } from "./navigation";

export const createBackToBeerList = (actions, router) => ({
  view: _model => (
    <div>
      <div>
        <a href={router.getLink(pages.beerList.id)}>Back to beer list</a>
      </div>
      <div>
        <button className="btn btn-default btn-xs"
          onClick={actions.navigateToBeerList}>
          Back to beer list
        </button>
      </div>
    </div>
  )
});
