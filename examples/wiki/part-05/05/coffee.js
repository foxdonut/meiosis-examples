import m from "mithril";

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

    return model => m("p", "Coffee Page",
      m("ul",
        model.coffees.map(coffee =>
          m("li", { key: coffee.id },
            m("a[href='#/coffee/" + coffee.id + "']", coffee.description),
            m("span", " "),
            m("button.btn.btn-default.btn-xs",
              { onclick: actions.coffeeDescription(coffee.id) }, coffee.description)
          )
        )
      ),
      model.params.id ? m("div", "Description of coffee " + model.params.id) : null
    );
  },
  display: (update, params) => update(merge({ page: coffee.page, params }))
};
