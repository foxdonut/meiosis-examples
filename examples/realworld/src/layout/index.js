import { Route } from "../util/router"
import { get } from "../util/fp"

const getUrl = () => "FIXME"

export const Header = ({ state }) => {
  //FIXME
  //const active = pageId => ({ className: { active: state.route.case === pageId } })
  const active = () => ({})

  return [
    "nav.navbar.navbar-light",
    [
      ".container",
      ["a.navbar-brand", { href: getUrl(Route.Home()) }, "conduit"],
      [
        "ul.nav.navbar-nav.pull-xs-right",
        [
          "li.nav-item",
          active("Home"),
          ["a.nav-link", { href: getUrl(Route.Home()) }, "Home"]
        ],
        state.user
          ? [
              [
                "li.nav-item",
                active("ArticleCreate"),
                [
                  "a.nav-link",
                  { href: getUrl(Route.ArticleCreate()) },
                  ["i.ion-compose"],
                  " New Article"
                ]
              ],
              [
                "li.nav-item",
                active("Settings"),
                [
                  "a.nav-link",
                  { href: getUrl(Route.Settings()) },
                  ["i.ion-gear-a"],
                  " Settings"
                ]
              ],
              [
                "li.nav-item",
                {
                  className: {
                    active:
                      //state.route.case === "Profile" && //FIXME
                      get(state, ["user", "id"]) === get(state, ["profile", "id"])
                  }
                },
                [
                  "a.nav-link",
                  { href: getUrl(Route.Profile({ username: state.user.username })) },
                  state.user.username
                ]
              ]
            ]
          : [
              [
                "li.nav-item",
                active("Login"),
                ["a.nav-link", { href: getUrl(Route.Login()) }, "Sign in"]
              ],
              [
                "li.nav-item",
                active("Register"),
                ["a.nav-link", { href: getUrl(Route.Register()) }, "Sign up"]
              ]
            ]
      ]
    ]
  ]
}

export const Footer = () => [
  "footer",
  [
    ".container",
    ["a.logo-font", { href: getUrl(Route.Home()) }, "conduit"],
    [
      "span.attribution",
      "An interactive learning project from ",
      ["a[href=https://thinkster.io]", "Thinkster"],
      ["span", { innerHTML: ". Code &amp; design licensed under MIT." }]
    ]
  ]
]
