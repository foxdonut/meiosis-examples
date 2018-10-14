import { compose, preventDefault } from "../util/fp"

export const view = ({ actions, articles, popularTags }) => model => {
  const content = model.articlesFilter.tag ? {
    globalFeed: false,
    tagFeedComponent: ["li.nav-item",
      ["a.nav-link.active", "#" + model.articlesFilter.tag]
    ]
  } : {
    globalFeed: true,
    tagFeedComponent: null
  }

  return [".home-page",
    !model.user && [".banner",
      [".container",
        ["h1.logo-font", "conduit"],
        ["p", "A place to share your knowledge."]
      ]
    ],
    [".container page",
      [".row",
        [".col-md-9",
          [".feed-toggle",
            ["ul.nav.nav-pills.outline-active",
              model.user && ["li.nav-item",
                ["a.nav-link[href='']", "Your Feed"]
              ],
              ["li.nav-item",
                ["a.nav-link",
                  { href: "#", className: { active: content.globalFeed },
                    onClick: compose(actions.clearTagFilter, preventDefault)
                  },
                  "Global Feed"]
              ],
              content.tagFeedComponent
            ]
          ],
          articles(model)
        ],
        [".col-md-3",
          [".sidebar", popularTags(model)]
        ]
      ]
    ]
  ]
}
