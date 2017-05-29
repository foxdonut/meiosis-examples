import m from "mithril";

import { itemDetails } from "./itemDetails";
import { merge } from "./util";

export const items = {
  page: {
    id: "Items",
    tab: "Items"
  },
  create: update => {
    const actions = {
      itemSummary: id => () => items.display(update, { id }),
      itemDetails: id => () => itemDetails.display(update, { id })
    };

    const itemSummary = id => id ? [
      m("p",
        "Summary of item " + id
      ),
      m("a[href='#/items/" + id + "/details']", "View details"),
      m("span", " "),
      m("button.btn.btn-default.btn-xs",
        { onclick: actions.itemDetails(id) }, "View details")
    ] : null;

    return model => m("div",
      m("p", "Items Page"),
      m("ul",
        m("li",
          m("a[href='#/items/1']", "Item 1"),
          m("span", " "),
          m("button.btn.btn-default.btn-xs",
            { onclick: actions.itemSummary(1) }, "Item 1")
        ),
        m("li",
          m("a[href='#/items/2']", "Item 2"),
          m("span", " "),
          m("button.btn.btn-default.btn-xs",
            { onclick: actions.itemSummary(2) }, "Item 2")
        )
      ),
      itemSummary(model.params.id)
    );
  },
  display: (update, params) => update(merge({ page: items.page, params }))
};
