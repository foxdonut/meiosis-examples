import { get } from "../util/fp"
import { ProfilePage, SettingsPage, getUrl } from "../util/router"
import { defaultImage } from "../util/view"

export const view = ({ actions, articles }) => model => {
  const username = get(model, ["profile", "username"])
  const isCurrentUser = get(model, ["profile", "id"]) === get(model, ["user", "id"])
  const isFavorites = !!model.articlesFilter.favorited

  return !model.profile
    ? ["div", { style: "height: 2000px" },
      model.loading ? ["img", { src: "/assets/loading.gif" }] : null
    ]
    : [".profile-page",
      [".user-info",
        [".container",
          [".row",
            [".col-xs-12.col-md-10.offset-md-1",
              ["img.user-img", { src: model.profile.image || defaultImage }],
              ["h4", username],
              ["p", model.profile.bio],
              isCurrentUser
                ? ["a.btn.btn-sm.btn-outline-secondary.action-btn",
                  { href: getUrl(SettingsPage) },
                  ["i.ion-gear-a"], " Edit Profile Settings"
                ]
                : model.profile.following
                  ? ["button.btn.btn-sm.btn-outline-secondary.action-btn",
                    { onClick: () => actions.unfollow(username) },
                    ["i.ion-plus-round"], ` Unfollow ${username}`
                  ]
                  : ["button.btn.btn-sm.btn-outline-secondary.action-btn",
                    { onClick: () => actions.follow(username) },
                    ["i.ion-plus-round"], ` Follow ${username}`
                  ]
            ]
          ]
        ]
      ],
      [".container",
        [".row",
          [".col-xs-12.col-md-10.offset-md-1"], ["div", "TODO", ["ul",
            ["li", "Favorited Articles"]]]],
        [".row",
          [".col-xs-12.col-md-10.offset-md-1",
            [".articles-toggle",
              ["ul.nav.nav-pills.outline-active",
                ["li.nav-item",
                  ["a.nav-link",
                    { className: { active: !isFavorites },
                      href: getUrl(ProfilePage, { username, author: username })
                    },
                    "My Articles"]
                ],
                ["li.nav-item",
                  ["a.nav-link",
                    { className: { active: isFavorites },
                      href: getUrl(ProfilePage, { username, favorited: username })
                    },
                    "Favorited Articles"]
                ]
              ]
            ],
            articles(model)
          ]
        ]
      ]
    ]
}
