export const view = () => model => {
  const username = model.author.username

  return [".article-preview",
    [".article-meta",
      ["a", /*profileLink(username),*/
        model.author.image && ["img", { src: model.author.image }]
      ],
      [".info",
        ["a.author", /*profileLink(username),*/ username],
        ["span.date", new Date(model.createdAt).toDateString()]
      ],
      [".pull-xs-right",
        ["button.btn.btn-sm.btn-outline-primary",
          ["i.ion-heart"],
          ["span", model.favoritesCount]
        ]
      ]
    ],
    ["a.preview-link", { href: `#/article/${model.slug}` },
      ["h1", model.title],
      ["p", model.description],
      ["span", "Read more..."],
      ["ul.tag-list",
        model.tagList.map(tag => ["li.tag-default.tag-pill.tag-outline", tag])
      ]
    ]
  ]
}
