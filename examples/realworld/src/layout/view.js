import { Route, router } from "../router"
import { get } from "../util/fp"
import { selectors } from "../state"

const Header = ({ state }) => {
  const active = pageId => ({ className: { active: selectors.page(state) === pageId } })

  return [
    "nav.navbar.navbar-light",
    [
      ".container",
      ["a.navbar-brand", { href: router.toUrl(Route.Home) }, "conduit"],
      [
        "a",
        {
          href: "https://github.com/foxdonut/meiosis-examples/tree/master/examples/realworld",
          target: "_blank"
        },
        "source code"
      ],
      [
        "ul.nav.navbar-nav.pull-xs-right",
        ["li.nav-item", active("Home"), ["a.nav-link", { href: router.toUrl(Route.Home) }, "Home"]],
        state.user
          ? [
              [
                "li.nav-item",
                active("ArticleCreate"),
                [
                  "a.nav-link",
                  { href: router.toUrl(Route.ArticleCreate) },
                  ["i.ion-compose"],
                  " New Article"
                ]
              ],
              [
                "li.nav-item",
                active("Settings"),
                [
                  "a.nav-link",
                  { href: router.toUrl(Route.Settings) },
                  ["i.ion-gear-a"],
                  " Settings"
                ]
              ],
              [
                "li.nav-item",
                {
                  className: {
                    active:
                      (selectors.page(state) === "Profile" ||
                        selectors.page(state) === "ProfileFavorites") &&
                      get(state, ["user", "username"]) === get(state, ["profile", "username"])
                  }
                },
                [
                  "a.nav-link",
                  { href: router.toUrl(Route.Profile, { username: state.user.username }) },
                  state.user.username
                ]
              ]
            ]
          : [
              [
                "li.nav-item",
                active("Login"),
                ["a.nav-link", { href: router.toUrl(Route.Login) }, "Sign in"]
              ],
              [
                "li.nav-item",
                active("Register"),
                ["a.nav-link", { href: router.toUrl(Route.Register) }, "Sign up"]
              ]
            ]
      ]
    ]
  ]
}

const Footer = () => [
  "footer",
  [
    ".container",
    ["a.logo-font", { href: router.toUrl(Route.Home) }, "conduit"],
    [
      "span.attribution",
      "An interactive learning project from ",
      ["a[href=https://thinkster.io]", "Thinkster"],
      ["span", { innerHTML: ". Code &amp; design licensed under MIT." }]
    ]
  ]
]

export const Layout = ({ state, actions, Component }) => [
  "div",
  Header({ state }),
  Component({ state, actions }),
  Footer()
]
