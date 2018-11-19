import { Route, getUrl } from "../util/router"

export const Header = {
  view: () => model => {
    const active = routeCase => ({ className: { "active": model.route.case === routeCase } })

    return ["nav.navbar.navbar-light",
      [".container",
        ["a.navbar-brand", { href: getUrl(Route.of.Home()) }, "conduit"],
        ["ul.nav.navbar-nav.pull-xs-right",
          ["li.nav-item", active("Home"),
            ["a.nav-link", { href: getUrl(Route.of.Home()) }, "Home"]
          ],
          model.user ? [
            ["li.nav-item", active("Settings"),
              ["a.nav-link", { href: getUrl(Route.of.Settings()) },
                ["i.ion-gear-a"],
                " Settings"
              ]
            ]
          ] : [
            ["li.nav-item", active("Login"),
              ["a.nav-link", { href: getUrl(Route.of.Login()) }, "Sign in"]
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
