import m from "mithril";

export const createView = (actions, components) => ({
  oninit: vnode => {
    actions.loadProfile(vnode.attrs.username);
    actions.loadArticles(vnode.attrs.username);
  },
  view: vnode => {
    const model = vnode.attrs.model;

    return m(".profile-page",
      m(".user-info",
        m(".container",
          m(".row",
            m(".col-xs-12.col-md-10.offset-md-1",
              m("img.user-img", { src: model.profile.image }),
              m("h4", model.profile.username ),
              m("p", model.profile.bio),
              m("button.btn.btn-sm.btn-outline-secondary.action-btn",
                m("i.ion-plus-round"),
                m.trust("&nbsp;"),
                "Follow " + model.profile.username
              )
            )
          )
        )
      ),
      m(".container",
        m(".row",
          m(".col-xs-12.col-md-10.offset-md-1",
            m(".articles-toggle",
              m("ul.nav.nav-pills.outline-active",
                m("li.nav-item",
                  m("a.nav-link.active[href='']", "My Articles")
                ),
                m("li.nav-item",
                  m("a.nav-link[href='']", "Favorited Articles")
                )
              )
            ),
            m(components.Articles, { model } )
          )
        )
      )
    );
  }
});
