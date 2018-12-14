import { getUrl, Route } from "../util/router"
import { compose, preventDefault } from "../util/fp"

export const view = ({ actions, articles, popularTags }) => state => {
  const content = state.articlesFilter.tag ? {
    globalFeed: false,
    tagFeedComponent: ["li.nav-item",
      ["a.nav-link.active", `#${state.articlesFilter.tag}`]
    ]
  } : {
    globalFeed: !state.feed,
    tagFeedComponent: null
  }

  return [".home-page",
    !state.user && [".banner",
      [".container",
        ["h1.logo-font", "conduit"],
        ["p", "A place to share your ", ["i", "Meiosis"], " knowledge."]
      ]
    ],
    [".container page",
      [".row",
        [".col-md-9",
          ["ul",
            ["li", "Global Feed pagination"],
          ]
        ]
      ],
      [".row",
        [".col-md-9",
          [".feed-toggle",
            ["ul.nav.nav-pills.outline-active",
              state.user && ["li.nav-item",
                ["a.nav-link",
                  { href: getUrl(Route.of.Home()),
                    onClick: compose(actions.navigateToYourFeed, preventDefault),
                    className: { active: state.feed }
                  },
                  "Your Feed"]
              ],
              ["li.nav-item",
                ["a.nav-link",
                  { href: getUrl(Route.of.Home()),
                    onClick: compose(actions.navigateToGlobalFeed, preventDefault),
                    className: { active: content.globalFeed }
                  },
                  "Global Feed"]
              ],
              content.tagFeedComponent
            ]
          ],
          state.articles
            ? articles(state)
            : ["div", { style: { height: "2000px" } },
              state.loading ? ["img", { src: "/assets/loading.gif" }] : null]
        ],
        [".col-md-3",
          [".sidebar", popularTags(state)]
        ]
      ]
    ]
  ]
}
