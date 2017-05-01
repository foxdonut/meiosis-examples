import m from "mithril";
import { range } from "ramda";

export const createView = actions => ({
  view: vnode => {
    const model = vnode.attrs.model;

    const currentPageNumber = (model.offset / model.limit) + 1;
    const pageList = range(1, Math.ceil(model.total / model.limit) + 1);

    return m("nav",
      m("ul.pagination",
        m("li.page-item",
          pageList.map(pageNumber =>
            m("a.page-link" + (pageNumber === currentPageNumber ? ".active" : "") + "[href='']",
              { onclick: actions.page(pageNumber) },
              String(pageNumber)
            )
          )
        )
      )
    );
  }
});
