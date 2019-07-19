import { Route } from "../routes"
import { router } from "../router"
import { defaultImage } from "../util/view"

export const ArticleSummary = ({ state, actions, article }) => {
  const username = article.author.username

  return [
    ".article-preview",
    [
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
          username
        ],
        ["span.date", new Date(article.createdAt).toDateString()]
      ],
      [
        ".pull-xs-right",
        [
          "button.btn.btn-sm",
          {
            className: {
              "btn-primary": article.favorited,
              "btn-outline-primary": !article.favorited
            },
            onClick: article.favorited
              ? () => actions.unfavoriteArticle(state, article.slug)
              : () => actions.favoriteArticle(state, article.slug)
          },
          ["i.ion-heart"],
          ["span", ` ${article.favoritesCount} `]
        ]
      ]
    ],
    [
      ".preview-link",
      [
        "a.preview-link",
        { href: router.toPath(Route.ArticleDetail({ slug: article.slug })) },
        ["h1", article.title],
        ["p", article.description],
        ["span", "Read more..."]
      ],
      [
        "ul.tag-list",
        article.tagList.map(tag => [
          "li.tag-default.tag-pill.tag-outline",
          ["a", { href: router.toPath(Route.Home({ tag })) }, tag]
        ])
      ]
    ]
  ]
}
