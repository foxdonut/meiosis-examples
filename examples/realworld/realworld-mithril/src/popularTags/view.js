import m from "mithril";

export const createView = actions => model =>
  [
    m("p", "Popular Tags"),

    m(".tag-list", model.tags.map(tag =>
      m("a.tag-pill.tag-default[href='']", { onclick: actions.tagFilter(tag) }, tag))
    )
  ];
