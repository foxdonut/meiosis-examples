export const createView = ({ articles, popularTags }) => model => {
  const content = model.tagFilter ? {
    globalFeedClass: "",
    tagFeedComponent: ["li.nav-item",
      ["a.nav-link.active[href='']", "#" + model.tagFilter]
    ]
  } : {
    globalFeedClass: ".active",
    tagFeedComponent: null
  }

  return [".home-page",
    [".banner",
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
              model.signedIn && ["li.nav-item",
                ["a.nav-link[href='']", "Your Feed"]
              ],
              ["li.nav-item",
                ["a.nav-link" + content.globalFeedClass + "[href='/']", "Global Feed"]
              ],
              content.tagFeedComponent
            ]
          ],
          articles.view(model)
        ],
        [".col-md-3",
          [".sidebar", popularTags.view(model)]
        ]
      ]
    ]
  ]
}
