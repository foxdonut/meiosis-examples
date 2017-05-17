import m from "mithril";

import { mlink } from "../util";

export const createView = (actions, components) => model => {
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
              model.signedIn && m("li.nav-item",
                m("a.nav-link[href='']", "Your Feed")
              ),
              m("li.nav-item",
                m("a.nav-link" + content.globalFeedClass + "[href='/']", mlink(), "Global Feed")
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
};
