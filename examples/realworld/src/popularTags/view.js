import m from "mithril";

export const createView = actions => ({
  oninit: actions.loadPopularTags,

  view: vnode => {
    const model = vnode.attrs.model;

    return [
      m("p", "Popular Tags"),

      m(".tag-list", model.tags.map(tag =>
        m("a.tag-pill.tag-default[href='']", { onclick: actions.tagFilter(tag) }, tag))
      )
    ];
  }
});
