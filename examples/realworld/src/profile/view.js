import { get } from "../util/fp"
import { Route, getUrl } from "../util/router"
import { defaultImage } from "../util/view"

export const view = ({ actions, articles }) => model => {
  const username = get(model, ["profile", "username"])
  const isCurrentUser = get(model, ["profile", "id"]) === get(model, ["user", "id"])
  const isFavorites = model.route.case === "ProfileFavorites"

  return !model.profile
    ? ["div", { style: { height: "2000px" } },
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
                  { href: getUrl(Route.of.Settings) },
                  ["i.ion-gear-a"], " Edit Profile Settings"
                ]
                : ["button.btn.btn-sm.btn-outline-secondary.action-btn",
                  { onClick: model.profile.following
                    ? () => actions.unfollow(username)
                    : () => actions.follow(username)
                  },
                  ["i.ion-plus-round"],
                  model.profile.following ? " Unfollow " : " Follow ",
                  username
                ]
            ]
          ]
        ]
      ],
      [".container",
        [".row",
          [".col-xs-12.col-md-10.offset-md-1",
            [".articles-toggle",
              ["ul.nav.nav-pills.outline-active",
                ["li.nav-item",
                  ["a.nav-link",
                    { className: { active: !isFavorites },
                      href: getUrl(Route.of.Profile({ username }))
                    },
                    "My Articles"]
                ],
                ["li.nav-item",
                  ["a.nav-link",
                    { className: { active: isFavorites },
                      href: getUrl(Route.of.ProfileFavorites({ username }))
                    },
                    "Favorited Articles"]
                ]
              ]
            ],
            articles(model),
          ]
        ]
      ]
    ]
}
