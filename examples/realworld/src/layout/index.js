import { Route, getUrl } from "../util/router"
import { get } from "../util/fp"

export const Header = {
  view: () => model => {
    const active = pageId => ({ className: { "active": model.route.case === pageId } })

    return ["nav.navbar.navbar-light",
      [".container",
        ["a.navbar-brand", { href: getUrl(Route.of.Home()) }, "conduit"],
        ["ul.nav.navbar-nav.pull-xs-right",
          ["li.nav-item", active("Home"),
            ["a.nav-link", { href: getUrl(Route.of.Home()) }, "Home"]
          ],
          model.user ? [
            ["li.nav-item", active("ArticleCreate"),
              ["a.nav-link", { href: getUrl(Route.of.ArticleCreate()) },
                ["i.ion-compose"],
                " New Article"
              ]
            ],
            ["li.nav-item", active("Settings"),
              ["a.nav-link", { href: getUrl(Route.of.Settings()) },
                ["i.ion-gear-a"],
                " Settings"
              ]
            ],
            ["li.nav-item",
              { className:
                { active: model.route.case === "Profile" &&
                    get(model, ["user", "id"]) === get(model, ["profile", "id"]) }
              },
              ["a.nav-link",
                { href: getUrl(Route.of.Profile({ username: model.user.username })) },
                model.user.username]
            ]
          ] : [
            ["li.nav-item", active("Login"),
              ["a.nav-link", { href: getUrl(Route.of.Login()) }, "Sign in"]
            ],
            ["li.nav-item", active("Register"),
              ["a.nav-link", { href: getUrl(Route.of.Register()) }, "Sign up"]
            ]
          ]
        ]
      ]
    ]
  }
}

export const Footer = {
  view: () => _model =>
    ["footer",
      [".container",
        ["a.logo-font", { href: getUrl(Route.of.Home()) }, "conduit"],
        ["span.attribution",
          "An interactive learning project from ",
          ["a[href=https://thinkster.io]", "Thinkster"],
          ["span", { innerHTML: ". Code &amp; design licensed under MIT." }]
        ]
      ]
    ]
}
