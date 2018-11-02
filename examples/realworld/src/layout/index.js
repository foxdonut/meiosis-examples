import { HomePage, LoginPage, RegisterPage, ArticleCreatePage, SettingsPage, ProfilePage, getUrl }
  from "../util/router"
import { get } from "../util/fp"

export const Header = {
  view: () => model => {
    const active = pageId => ({ className: { "active": model.pageId === pageId } })

    return ["nav.navbar.navbar-light",
      [".container",
        ["a.navbar-brand", { href: getUrl(HomePage) }, "conduit"],
        ["ul.nav.navbar-nav.pull-xs-right",
          ["li.nav-item", active(HomePage),
            ["a.nav-link", { href: getUrl(HomePage) }, "Home"]
          ],
          model.user ? [
            ["li.nav-item", active(ArticleCreatePage),
              ["a.nav-link", { href: getUrl(ArticleCreatePage) },
                ["i.ion-compose"],
                " New Article"
              ]
            ],
            ["li.nav-item", active(SettingsPage),
              ["a.nav-link", { href: getUrl(SettingsPage) },
                ["i.ion-gear-a"],
                " Settings"
              ]
            ],
            ["li.nav-item",
              { className:
                { active: model.pageId === ProfilePage &&
                    get(model, ["user", "id"]) === get(model, ["profile", "id"]) }
              },
              ["a.nav-link",
                { href: getUrl(ProfilePage, { username: model.user.username }) },
                model.user.username]
            ]
          ] : [
            ["li.nav-item", active(LoginPage),
              ["a.nav-link", { href: getUrl(LoginPage) }, "Sign in"]
            ],
            ["li.nav-item", active(RegisterPage),
              ["a.nav-link", { href: getUrl(RegisterPage) }, "Sign up"]
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
        ["a.logo-font", { href: getUrl(HomePage) }, "conduit"],
        ["span.attribution",
          "An interactive learning project from ",
          ["a[href=https://thinkster.io]", "Thinkster"],
          ["span", { innerHTML: ". Code &amp; design licensed under MIT." }]
        ]
      ]
    ]
}
