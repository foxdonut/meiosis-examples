import marked from "marked"

import { compose, defaultTo, get, preventDefault, thrush } from "../util/fp"
import { Route } from "../routes"
import { router } from "../router"
import { defaultImage } from "../util/view"

const isAuthor = (username, article) => article.author.username === username

const authorMeta = actions => article => [
  [
    "a.btn.btn-outline-secondary.btn-sm",
    { href: router.toPath(Route.ArticleEdit({ slug: article.slug })) },
    ["i.ion-edit"],
    " Edit Article"
  ],
  [
    "button.btn.btn-outline-danger.btn-sm",
    { onClick: () => actions.deleteArticle(article.slug) },
    ["i.ion-trash-a"],
    " Delete Article"
  ]
]

const nonAuthorMeta = (state, actions) => article => [
  [
    "button.btn.btn-sm.btn-outline-secondary",
    {
      onClick: article.author.following
        ? () => actions.unfollowUser(state, article.author.username)
        : () => actions.followUser(state, article.author.username)
    },
    ["i.ion-plus-round"],
    article.author.following ? " Unfollow " : " Follow ",
    article.author.username,
    " "
  ],
  [
    "button.btn.btn-sm.btn-outline-primary",
    {
      onClick: article.favorited
        ? () => actions.unfavoriteArticle(article.slug)
        : () => actions.favoriteArticle(state, article.slug)
    },
    ["i.ion-heart"],
    article.favorited ? " Unfavorite" : " Favorite",
    " Article ",
    ["span.counter", `(${article.favoritesCount})`]
  ]
]

const articleMeta = (state, actions, article, username) => [
  ".article-meta",
  [
    "a",
    { href: router.toPath(Route.Profile({ username: article.author.username })) },
    ["img", { src: article.author.image || defaultImage }]
  ],
  [
    ".info",
    [
      "a.author",
      { href: router.toPath(Route.Profile({ username: article.author.username })) },
      article.author.username
    ],
    ["span.date", new Date(article.createdAt).toDateString()]
  ],
  thrush(article, isAuthor(username, article) ? authorMeta(actions) : nonAuthorMeta(state, actions))
]

export const ArticleDetail = ({ state, actions }) => {
  const article = state.article
  const username = get(state, ["user", "username"])

  return !article
    ? ["img", { src: "/assets/loading.gif" }]
    : [
        ".article-page",
        [
          ".banner",
          [".container", ["h1", article.title], articleMeta(state, actions, article, username)]
        ],
        [
          ".container page",
          [
            ".row.article-content",
            [
              ".col-md-12",
              ["h2", article.description],
              [
                ".tag-list",
                article.tagList.map(tag => [
                  "a.tag-pill.tag-default",
                  { href: router.toPath(Route.Home(), { tag }) },
                  tag
                ])
              ],
              ["p", { innerHTML: marked(article.body, { sanitize: true }) }]
            ]
          ],
          ["hr"],
          [".article-actions", articleMeta(state, actions, article, username)],
          [
            ".row",
            [
              ".col-xs-12.col-md-8.offset-md-2",
              state.user
                ? [
                    "form.card.comment-form",
                    [
                      ".card-block",
                      [
                        "textarea.form-control",
                        {
                          placeholder: "Write a comment...",
                          rows: "3",
                          onInput: evt => actions.updateCommentField(evt.target.value),
                          value: state.comment
                        }
                      ]
                    ],
                    [
                      ".card-footer",
                      ["img.comment-author-img", { src: state.user.image || defaultImage }],
                      [
                        "button.btn.btn-sm.btn-primary",
                        {
                          onClick: compose(
                            () => actions.addComment(article.slug, state.comment),
                            preventDefault
                          )
                        },
                        "Post Comment"
                      ]
                    ]
                  ]
                : [
                    "p",
                    ["a", { href: router.toPath(Route.Login()) }, "Sign in"],
                    " or ",
                    ["a", { href: router.toPath(Route.Register()) }, "sign up"],
                    " to add comments on this article."
                  ],
              defaultTo([], state.comments).map(comment => [
                ".card",
                [".card-block", ["p.card-text", comment.body]],
                [
                  ".card-footer",
                  [
                    "a.comment-author[href=#]",
                    ["img.comment-author-img", { src: comment.author.image || defaultImage }]
                  ],
                  " ",
                  ["a.comment-author[href=#]", comment.author.username],
                  ["span.date-posted", new Date(comment.createdAt).toDateString()],
                  [
                    "span.mod-options",
                    state.user &&
                      comment.author.id === state.user.id && [
                        "i.ion-trash-a",
                        { onClick: actions.deleteComment(article.slug, comment.id) }
                      ]
                  ]
                ]
              ])
            ]
          ]
        ]
      ]
}
