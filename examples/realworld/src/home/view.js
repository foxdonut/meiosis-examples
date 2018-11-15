import { HomePage, getUrl } from "../util/router"
import { compose, preventDefault } from "../util/fp"

export const view = ({ actions, articles, popularTags }) => model => {
  const content = model.articlesFilter.tag ? {
    globalFeed: false,
    tagFeedComponent: ["li.nav-item",
      ["a.nav-link.active", `#${model.articlesFilter.tag}`]
    ]
  } : {
    globalFeed: !model.feed,
    tagFeedComponent: null
  }

  return [".home-page",
    !model.user && [".banner",
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
              model.user && ["li.nav-item",
                ["a.nav-link",
                  { href: getUrl(HomePage),
                    onClick: compose(actions.navigateToYourFeed, preventDefault),
                    className: { active: model.feed }
                  },
                  "Your Feed"]
              ],
              ["li.nav-item",
                ["a.nav-link",
                  { href: getUrl(HomePage),
                    onClick: compose(actions.navigateToGlobalFeed, preventDefault),
                    className: { active: content.globalFeed }
                  },
                  "Global Feed"]
              ],
              content.tagFeedComponent
            ]
          ],
          model.articles
            ? articles(model)
            : ["div", { style: { height: "2000px" } },
              model.loading ? ["img", { src: "/assets/loading.gif" }] : null]
        ],
        [".col-md-3",
          [".sidebar", popularTags(model)]
        ]
      ]
    ]
  ]
}
