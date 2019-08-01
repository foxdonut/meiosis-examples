import { Route } from "../routes"
import { router } from "../router"
import { get } from "../util/fp"

export const Header = ({ state, routing }) => {
  const active = pageId => ({ className: { active: routing.localSegment.id === pageId } })

  return [
    "nav.navbar.navbar-light",
    [
      ".container",
      ["a.navbar-brand", { href: router.toPath(Route.Home()) }, "conduit"],
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
        [
          "li.nav-item",
          active("Home"),
          ["a.nav-link", { href: router.toPath(Route.Home()) }, "Home"]
        ],
        state.user
          ? [
              [
                "li.nav-item",
                active("ArticleCreate"),
                [
                  "a.nav-link",
                  { href: router.toPath(Route.ArticleCreate()) },
                  ["i.ion-compose"],
                  " New Article"
                ]
              ],
              [
                "li.nav-item",
                active("Settings"),
                [
                  "a.nav-link",
                  { href: router.toPath(Route.Settings()) },
                  ["i.ion-gear-a"],
                  " Settings"
                ]
              ],
              [
                "li.nav-item",
                {
                  className: {
                    active:
                      (routing.localSegment.id === "Profile" ||
                        routing.localSegment.id === "ProfileFavorites") &&
                      get(state, ["user", "username"]) === get(state, ["profile", "username"])
                  }
                },
                [
                  "a.nav-link",
                  { href: router.toPath(Route.Profile({ username: state.user.username })) },
                  state.user.username
                ]
              ]
            ]
          : [
              [
                "li.nav-item",
                active("Login"),
                ["a.nav-link", { href: router.toPath(Route.Login()) }, "Sign in"]
              ],
              [
                "li.nav-item",
                active("Register"),
                ["a.nav-link", { href: router.toPath(Route.Register()) }, "Sign up"]
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
    ["a.logo-font", { href: router.toPath(Route.Home()) }, "conduit"],
    [
      "span.attribution",
      "An interactive learning project from ",
      ["a[href=https://thinkster.io]", "Thinkster"],
      ["span", { innerHTML: ". Code &amp; design licensed under MIT." }]
    ]
  ]
]
