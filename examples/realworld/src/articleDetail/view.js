import marked from "marked"

import { defaultTo, thrush } from "../util/fp"

const isAuthor = (username, article) => article.author.username === username

const authorMeta = article => [
  ["a.btn.btn-outline-secondary.btn-sm[href='/editor/" + article.slug + "']",
    ["i.ion-edit"],
    " Edit Article"
  ],
  ["button.btn.btn-outline-danger.btn-sm",
    ["i.ion-trash-a"],
    " Delete Article"
  ]
]

const nonAuthorMeta = article => [
  ["button.btn.btn-sm.btn-outline-secondary",
    ["i.ion-plus-round"],
    ["span", {innerHTML: "&nbsp"}],
    "Follow " + article.author.username
  ],
  ["span", {innerHTML: "&nbsp;"}],
  ["button.btn.btn-sm.btn-outline-primary",
    ["i.ion-heart"],
    ["span", {innerHTML: "&nbsp;"}],
    "Favorite Post ",
    ["span.counter", "(" + article.favoritesCount + ")"]
  ]
]

const articleMeta = (article, username) =>
  [".article-meta",
    ["a", /*profileLink(article.author.username),*/ /*["img", { src: article.author.image }]*/],
    [".info",
      ["a.author", /*profileLink(article.author.username),*/ article.author.username],
      ["span.date", new Date(article.createdAt).toDateString()]
    ],
    thrush(article, isAuthor(username, article) ? authorMeta : nonAuthorMeta)
  ]

export const createView = ({ actions }) => model => {
  const article = model.article
  //const username = path(["user", "username"], model) //FIXME
  const username = "DUCK"

  return [".article-page",
    [".banner",
      [".container",
        ["h1", article.title],
        articleMeta(article, username)
      ]
    ],
    [".container page",
      [".row.article-content",
        [".col-md-12",
          ["h2", article.description],
          [".tag-list",
            article.tagList.map(tag => ["span.tag-pill.tag-default", tag])
          ],
          ["p", {innerHTML: marked(article.body, { sanitize: true })}]
        ]
      ],
      ["hr"],
      [".article-actions",
        articleMeta(article, username)
      ],
      [".row",
        [".col-xs-12.col-md-8.offset-md-2",
          ["form.card.comment-form",
            [".card-block",
              ["textarea.form-control", { placeholder: "Write a comment...", rows: "3",
                onInput: actions.updateCommentField, value: model.comment }]
            ],
            [".card-footer",
              ["img.comment-author-img", { src: "http://i.imgur.com/Qr71crq.jpg" }],
              ["button.btn.btn-sm.btn-primary",
                { onClick: actions.addComment(article.slug, model.comment) }, "Post Comment"]
            ]
          ],
          defaultTo([], model.comments).map(comment =>
            [".card",
              [".card-block",
                ["p.card-text", comment.body]
              ],
              [".card-footer",
                ["a.comment-author[href='']",
                  /*["img.comment-author-img", { src: comment.author.image }]*/
                ],
                ["span", {innerHTML: "&nbsp;"}],
                ["a.comment-author[href='']", comment.author.username],
                ["span.date-posted", new Date(comment.createdAt).toDateString()],
                ["span.mod-options",
                  ["i.ion-edit"],
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
