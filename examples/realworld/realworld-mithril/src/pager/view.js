import m from "mithril";
import { range } from "ramda";

export const createView = actions => ({
  view: vnode => {
    const model = vnode.attrs.model;

    const currentPageNumber = (model.offset / model.limit) + 1;
    const pageList = range(1, Math.ceil(model.total / model.limit) + 1);

    return m("nav",
      m("ul.pagination",
        pageList.map(pageNumber =>
          m("li.page-item" + (pageNumber === currentPageNumber ? ".active" : ""),
            m("a.page-link[href='']",
              { onclick: actions.page(model, pageNumber) },
              String(pageNumber)
            )
          )
        )
      )
    );
  }
});
