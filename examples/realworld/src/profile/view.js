import { defaultImage } from "../util/view"

export const view = ({ actions, articles }) =>
  /*
  init: (username, isFavorites) => {
    actions.loadProfile(username)
    actions.loadArticles(username, isFavorites)
  },
  */
  model => {
    const username = model.user.username
    const isFavorites = false//vnode.attrs.favorites

    return [".profile-page",
      [".user-info",
        [".container",
          [".row",
            [".col-xs-12.col-md-10.offset-md-1",
              ["img.user-img", { src: model.user.image || defaultImage }],
              ["h4", username],
              ["p", model.user.bio],
              ["button.btn.btn-sm.btn-outline-secondary.action-btn",
                ["i.ion-plus-round"],
                ["span", { innerHTML: "&nbsp;" }],
                `Follow ${username}`
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
