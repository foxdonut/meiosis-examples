import { compose, constant, preventDefault } from "../util/fp"
import { ProfilePage, getUrl } from "../util/router"
import { defaultImage } from "../util/view"

export const view = ({ actions }) => model => {
  const username = model.author.username

  return [".article-preview",
    [".article-meta",
      ["a", { href: getUrl(ProfilePage, { username: model.author.username }) },
        ["img", { src: model.author.image || defaultImage }]
      ],
      [".info",
        ["a.author", { href: getUrl(ProfilePage, { username: model.author.username }) }, username],
        ["span.date", new Date(model.createdAt).toDateString()]
      ],
      [".pull-xs-right",
        ["button.btn.btn-sm.btn-outline-primary",
          { onClick: () => actions.favoriteArticle(model.slug) },
          ["i.ion-heart"],
          ["span", ` ${model.favoritesCount} `]
        ]
      ]
    ],
    [".preview-link",
      ["a.preview-link", { href: `#/article/${model.slug}` },
        ["h1", model.title],
        ["p", model.description],
        ["span", "Read more..."]
      ],
      ["ul.tag-list",
        // FIXME: use a tag route
        model.tagList.map(tag =>
          ["li.tag-default.tag-pill.tag-outline",
            ["a[href=#]",
              { onClick: compose(actions.tagFilter, constant(tag), preventDefault) },
              tag
            ]
          ]
        )

      ]
    ]
  ]
}
