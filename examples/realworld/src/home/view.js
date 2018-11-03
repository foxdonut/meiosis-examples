import { HomePage, FeedPage, getUrl } from "../util/router"

export const view = ({ articles, popularTags }) => model => {
  const content = model.articlesFilter.tag ? {
    globalFeed: false,
    tagFeedComponent: ["li.nav-item",
      ["a.nav-link.active", `#${model.articlesFilter.tag}`]
    ]
  } : {
    globalFeed: true,
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
      [".row", [".col-md-9", ["div", "TODO", ["ul", ["li", "Your Feed: without FeedPage?"],
        ["li", "articlesFilter management"], ["li", "Expired token"]]]]],
      [".row",
        [".col-md-9",
          [".feed-toggle",
            ["ul.nav.nav-pills.outline-active",
              model.user && ["li.nav-item",
                ["a.nav-link",
                  { href: getUrl(FeedPage),
                    className: {
                      active: model.pageId === FeedPage
                    }
                  },
                  "Your Feed"]
              ],
              ["li.nav-item",
                ["a.nav-link",
                  { href: getUrl(HomePage),
                    className: {
                      active: model.pageId === HomePage && content.globalFeed
                    }
                  },
                  "Global Feed"]
              ],
              content.tagFeedComponent
            ]
          ],
          model.articles
            ? articles(model)
            : ["div", { style: "height: 2000px" },
              model.loading ? ["img", { src: "/assets/loading.gif" }] : null]
        ],
        [".col-md-3",
          [".sidebar", popularTags(model)]
        ]
      ]
    ]
  ]
}
