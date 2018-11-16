import marked from "marked"

import { compose, defaultTo, get, preventDefault, thrush } from "../util/fp"
import { Route, getUrl } from "../util/router"
import { defaultImage } from "../util/view"

const isAuthor = (username, article) => article.author.username === username

const authorMeta = actions => article => [
  ["a.btn.btn-outline-secondary.btn-sm",
    { href: getUrl(Route.of.ArticleEdit, { slug: article.slug }) },
    ["i.ion-edit"],
    " Edit Article"
  ],
  ["button.btn.btn-outline-danger.btn-sm",
    { onClick: () => actions.deleteArticle(article.slug) },
    ["i.ion-trash-a"],
    " Delete Article"
  ]
]

const nonAuthorMeta = (model, actions) => article => [
  ["button.btn.btn-sm.btn-outline-secondary",
    { onClick: article.author.following
      ? () => actions.unfollowUser(model, article.author.username)
      : () => actions.followUser(model, article.author.username)
    },
    ["i.ion-plus-round"],
    article.author.following ? " Unfollow " : " Follow ",
    article.author.username, " "
  ],
  ["button.btn.btn-sm.btn-outline-primary",
    { onClick: article.favorited
      ? () => actions.unfavoriteArticle(article.slug)
      : () => actions.favoriteArticle(model, article.slug)
    },
    ["i.ion-heart"],
    article.favorited ? " Unfavorite" : " Favorite",
    " Article ",
    ["span.counter", `(${article.favoritesCount})`]
  ]
]

const articleMeta = (model, actions, article, username) =>
  [".article-meta",
    ["a", { href: getUrl(Route.of.Profile, { username: article.author.username }) },
      ["img", { src: article.author.image || defaultImage }]],
    [".info",
      ["a.author", { href: getUrl(Route.of.Profile, { username: article.author.username }) },
        article.author.username],
      ["span.date", new Date(article.createdAt).toDateString()]
    ],
    thrush(article, isAuthor(username, article) ? authorMeta(actions) : nonAuthorMeta(model, actions))
  ]

export const view = ({ actions }) => model => {
  const article = model.article
  const username = get(model, ["user", "username"])

  return !article ? ["img", { src: "/assets/loading.gif" }] : [".article-page",
    [".banner",
      [".container",
        ["h1", article.title],
        articleMeta(model, actions, article, username)
      ]
    ],
    [".container page",
      [".row.article-content",
        [".col-md-12",
          ["h2", article.description],
          [".tag-list",
            article.tagList.map(tag =>
              ["a.tag-pill.tag-default", { href: getUrl(Route.of.Home, {}, { tag }) }, tag])
          ],
          ["p", { innerHTML: marked(article.body, { sanitize: true }) }]
        ]
      ],
      ["hr"],
      [".article-actions",
        articleMeta(model, actions, article, username)
      ],
      [".row",
        [".col-xs-12.col-md-8.offset-md-2",
          model.user ? ["form.card.comment-form",
            [".card-block",
              ["textarea.form-control", { placeholder: "Write a comment...", rows: "3",
                onInput: evt => actions.updateCommentField(evt.target.value),
                value: model.comment }]
            ],
            [".card-footer",
              ["img.comment-author-img", { src: model.user.image || defaultImage }],
              ["button.btn.btn-sm.btn-primary",
                { onClick: compose(() => actions.addComment(article.slug, model.comment), preventDefault) },
                "Post Comment"]
            ]
          ] : ["p",
            ["a", { href: getUrl(Route.of.Login) }, "Sign in"],
            " or ",
            ["a", { href: getUrl(Route.of.Register) }, "sign up"],
            " to add comments on this article."
          ],
          defaultTo([], model.comments).map(comment =>
            [".card",
              [".card-block",
                ["p.card-text", comment.body]
              ],
              [".card-footer",
                ["a.comment-author[href=#]",
                  ["img.comment-author-img", { src: comment.author.image || defaultImage }]
                ],
                " ",
                ["a.comment-author[href=#]", comment.author.username],
                ["span.date-posted", new Date(comment.createdAt).toDateString()],
                ["span.mod-options",
                  model.user && (comment.author.id === model.user.id) &&
                  ["i.ion-trash-a", { onClick: actions.deleteComment(article.slug, comment.id) } ]
                ]
              ]
            ]
          )
        ]
      ]
    ]
  ]
}
