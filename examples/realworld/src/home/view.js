import m from "mithril";

export const createView = (actions, components) => ({
  oninit: () => actions.globalFeed(),

  view: vnode => {
    const model = vnode.attrs.model;

    const content = model.tagFilter ? {
      globalFeedClass: "",
      tagFeedComponent: m("li.nav-item",
        m("a.nav-link.active[href='']", "#" + model.tagFilter))
    } : {
      globalFeedClass: ".active",
      tagFeedComponent: null
    };

    return m(".home-page",
      m(".banner",
        m(".container",
          m("h1.logo-font", "conduit"),
          m("p", "A place to share your knowledge.")
        )
      ),
      m(".container page",
        m(".row",
          m(".col-md-9",
            m(".feed-toggle",
              m("ul.nav.nav-pills.outline-active",
                m("li.nav-item",
                  m("a.nav-link.disabled[href='']", "Your Feed")
                ),
                m("li.nav-item",
                  m("a.nav-link" + content.globalFeedClass + "[href='']",
                    { onclick: actions.globalFeed }, "Global Feed")
                ),
                content.tagFeedComponent
              )
            ),
            m(components.Articles, { model })
          ),
          m(".col-md-3",
            m(".sidebar",
              m(components.PopularTags, { model })
            )
          )
        )
      )
    );
  }
});
