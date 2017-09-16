import React from "react";

import { merge } from "./util";

export const coffee = {
  page: {
    id: "Coffee",
    tab: "Coffee"
  },
  create: update => {
    const actions = {
      coffeeDescription: id => () => coffee.display(update, { id })
    };

    return model => (<div>
      <p>Coffee Page</p>
      <ul>
        {model.coffees.map(coffee =>
          <li key={coffee.id}>
            <a href={"#/coffee/" + coffee.id}>{coffee.description}</a>
            {" "}
            <button className="btn btn-default btn-xs"
                onClick={actions.coffeeDescription(coffee.id)}>
              {coffee.description}
            </button>
          </li>
        )}
      </ul>
      {model.params.id ? <div>Description of coffee {model.params.id}</div> : null}
    </div>);
  },
  display: (update, params) => update(merge({ page: coffee.page, params }))
};
