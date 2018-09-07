import { profileLink } from "../util"

export const createView = (actions, components) => ({
  init: (username, isFavorites) => {
    actions.loadProfile(username)
    actions.loadArticles(username, isFavorites)
  },
  view: model => {
    const username = model.profile.username
    const isFavorites = false//vnode.attrs.favorites
    const myActive = isFavorites ? "" : ".active"
    const favActive = isFavorites ? ".active" : ""

    return [".profile-page",
      [".user-info",
        [".container",
          [".row",
            [".col-xs-12.col-md-10.offset-md-1",
              ["img.user-img", { src: model.profile.image }],
              ["h4", username],
              ["p", model.profile.bio],
              ["button.btn.btn-sm.btn-outline-secondary.action-btn",
                ["i.ion-plus-round"],
                ["span", {innerHTML: "&nbsp;"}],
                "Follow " + username
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
                  ["a.nav-link" + myActive, profileLink(username, false), "My Articles"]
                ],
                ["li.nav-item",
                  ["a.nav-link" + favActive, profileLink(username, true), "Favorited Articles"]
                ]
              ]
            ],
            [components.Articles, { model } ]
          ]
        ]
      ]
    ]
  }
})
