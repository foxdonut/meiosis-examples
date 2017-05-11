import m from "mithril";

import { mlink } from "../util";

export const createView = update => ({
  view: vnode => {
    const model = vnode.attrs.model;
    const active = page => vnode.attrs.page === page ? ".active" : "";

    return m("nav.navbar.navbar-light",
      m(".container",
        m("a.navbar-brand[href='/']", mlink(), "conduit"),
        m("ul.nav.navbar-nav.pull-xs-right",
          m("li.nav-item" + active("home"),
            m("a.nav-link[href='/']", mlink(), "Home")
          ),
          model.signedIn ? [
            m("li.nav-item" + active("articleEdit"),
              m("a.nav-link.ion-compose[href='/editor']", mlink(),
                m.trust("&nbsp;New Post")
              )
            ),
            m("li.nav-item" + active("settings"),
              m("a.nav-link.ion-gear-a[href='/settings']", mlink(),
                m.trust("&nbsp;Settings")
              )
            ),
            m("li.nav-item" + active("username"),
              m("a.nav-link[href='/@" + model.user.username + "']", mlink(),
                model.user.username
              )
            )
          ] : [
            m("li.nav-item" + active("login"), m("a.nav-link[href='/login']", mlink(), "Sign in")),
            m("li.nav-item" + active("register"), m("a.nav-link[href='/register']", mlink(), "Sign up"))
          ]
        )
      )
    );
  }
});
