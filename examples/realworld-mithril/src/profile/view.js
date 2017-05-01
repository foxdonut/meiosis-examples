import m from "mithril";
import { merge } from "ramda";

import { mlink } from "../util";

const profileHref = (username, isFavorites) => merge(
  { href: "/profile/" + username + (isFavorites ? "/favorites" : "") }, mlink()
);

export const createView = (actions, components) => ({
  init: (username, isFavorites) => {
    actions.loadProfile(username);
    actions.loadArticles(username, isFavorites);
  },
  view: vnode => {
    const model = vnode.attrs.model;
    const username = model.profile.username;
    const isFavorites = vnode.attrs.favorites;
    const myActive = isFavorites ? "" : ".active";
    const favActive = isFavorites ? ".active" : "";

    return m(".profile-page",
      m(".user-info",
        m(".container",
          m(".row",
            m(".col-xs-12.col-md-10.offset-md-1",
              m("img.user-img", { src: model.profile.image }),
              m("h4", username ),
              m("p", model.profile.bio),
              m("button.btn.btn-sm.btn-outline-secondary.action-btn",
                m("i.ion-plus-round"),
                m.trust("&nbsp;"),
                "Follow " + username
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
                  m("a.nav-link" + myActive, profileHref(username, false), "My Articles")
                ),
                m("li.nav-item",
                  m("a.nav-link" + favActive, profileHref(username, true), "Favorited Articles")
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
