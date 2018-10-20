import { get } from "../util/fp"
import { SettingsPage, getUrl } from "../util/router"
import { defaultImage } from "../util/view"

export const view = ({ actions, articles }) =>
  /*
  init: (username, isFavorites) => {
    actions.loadProfile(username)
    actions.loadArticles(username, isFavorites)
  },
  */
  model => {
    const username = get(model, ["profile", "username"])
    const isCurrentUser = get(model, ["profile", "id"]) === get(model, ["user", "id"])
    const isFavorites = false//vnode.attrs.favorites

    return !model.profile ? ["img", { src: "/assets/loading.gif" }] :
      [".profile-page",
        [".user-info",
          [".container",
            [".row",
              [".col-xs-12.col-md-10.offset-md-1",
                ["img.user-img", { src: model.user.image || defaultImage }],
                ["h4", username],
                ["p", model.user.bio],
                isCurrentUser ?
                  ["a.btn.btn-sm.btn-outline-secondary.action-btn",
                    { href: getUrl(SettingsPage) },
                    ["i.ion-gear-a"], " Edit Profile Settings"
                  ] :
                  ["button.btn.btn-sm.btn-outline-secondary.action-btn",
                    ["i.ion-plus-round"], ` Follow ${username}`
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
                    ["a.nav-link", { className: { active: !isFavorites } }, "My Articles"]
                  ],
                  ["li.nav-item",
                    ["a.nav-link", { className: { active: isFavorites } }, "Favorited Articles"]
                  ]
                ]
              ]/*,
              articles(model)*/
            ]
          ]
        ]
      ]
  }
