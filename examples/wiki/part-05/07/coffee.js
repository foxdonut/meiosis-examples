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
        m("li",
          m("a[href='#/coffee/1']", "Coffee 1"),
          m("span", " "),
          m("button.btn.btn-default.btn-xs",
            { onclick: actions.coffeeDescription(1) }, "Coffee 1")
        ),
        m("li",
          m("a[href='#/coffee/2']", "Coffee 2"),
          m("span", " "),
          m("button.btn.btn-default.btn-xs",
            { onclick: actions.coffeeDescription(2) }, "Coffee 2")
        )
      ),
      model.params.id ? m("div", "Description of coffee " + model.params.id) : null
    );
  },
  display: (update, params) => update(merge({ page: coffee.page, params }))
};
