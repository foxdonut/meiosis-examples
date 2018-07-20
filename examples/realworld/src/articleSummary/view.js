export const createView = () => model => {
  const username = model.author.username

  return [".article-preview",
    [".article-meta",
      ["a", /*profileLink(username),*/ ["img", { src: model.author.image }]],
      [".info",
        ["a.author", /*profileLink(username),*/ username],
        ["span.date", new Date(model.createdAt).toDateString()]
      ],
      ["button.btn.btn-outline-primary.btn-sm.pull-xs-right",
        ["i.ion-heart"], ["span", model.favoritesCount]
      ]
    ],
    ["a.preview-link", { href: "/article/" + model.slug },
      ["h1", model.title],
      ["p", model.description],
      ["span", "Read more..."],
      ["ul.tag-list",
        model.tagList.map(tag => ["li.tag-default.tag-pill.tag-outline", tag])
      ]
    ]
  ]
}
