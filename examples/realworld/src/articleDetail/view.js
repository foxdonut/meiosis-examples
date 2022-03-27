import { marked } from 'marked';
import { sanitize } from 'dompurify';

import { compose, defaultTo, get, preventDefault, thrush } from '../util/fp';
import { Route, router } from '../router';
import { defaultImage } from '../util/view';
import { actions } from './actions';

const isAuthor = (username, article) => article.author.username === username;

const authorMeta = cell => article => [
  [
    'a.btn.btn-outline-secondary.btn-sm',
    { href: router.toUrl(Route.ArticleEdit, { slug: article.slug }) },
    ['i.ion-edit'],
    ' Edit Article'
  ],
  ' ',
  [
    'button.btn.btn-outline-danger.btn-sm',
    { onClick: () => actions.deleteArticle(cell, article.slug) },
    ['i.ion-trash-a'],
    ' Delete Article'
  ]
];

const nonAuthorMeta = cell => article => [
  [
    'button.btn.btn-sm',
    {
      className: {
        'btn-outline-secondary': !article.author.following,
        'btn-secondary': article.author.following
      },
      onClick: article.author.following
        ? () => actions.unfollowUser(cell, article.author.username)
        : () => actions.followUser(cell, article.author.username)
    },
    ['i.ion-plus-round'],
    article.author.following ? ' Unfollow ' : ' Follow ',
    article.author.username,
    ' '
  ],
  ' ',
  [
    'button.btn.btn-sm',
    {
      className: { 'btn-outline-primary': !article.favorited, 'btn-primary': article.favorited },
      onClick: article.favorited
        ? () => actions.unfavoriteArticle(cell, article.slug)
        : () => actions.favoriteArticle(cell, article.slug)
    },
    ['i.ion-heart'],
    article.favorited ? ' Unfavorite' : ' Favorite',
    ' Article ',
    ['span.counter', `(${article.favoritesCount})`]
  ]
];

const articleMeta = (cell, article, username) => [
  '.article-meta',
  [
    'a',
    { href: router.toUrl(Route.Profile, { username: article.author.username }) },
    ['img', { src: article.author.image || defaultImage }]
  ],
  [
    '.info',
    [
      'a.author',
      { href: router.toUrl(Route.Profile, { username: article.author.username }) },
      article.author.username
    ],
    ['span.date', new Date(article.createdAt).toDateString()]
  ],
  thrush(article, isAuthor(username, article) ? authorMeta(cell) : nonAuthorMeta(cell))
];

export const ArticleDetail = ({ cell }) => {
  const state = cell.state;
  const article = state.article;
  const username = get(state, ['user', 'username']);

  return [
    '.article-page',
    // FIXME
    article && [
      '.banner',
      ['.container', ['h1', article.title], articleMeta(cell, article, username)]
    ],
    [
      '.container page',
      [
        '.row.article-content',
        [
          '.col-md-12',
          // FIXME
          !article
            ? 'Loading...'
            : [
                ['h2', article.description],
                [
                  '.tag-list',
                  article.tagList.map(tag => [
                    'a.tag-pill.tag-default',
                    { href: router.toUrl(Route.Home, { tag }) },
                    tag
                  ])
                ],
                ['p', { innerHTML: marked(article.body, { sanitizer: sanitize }) }]
              ]
        ]
      ],
      // FIXME
      article && [
        ['hr'],
        ['.article-actions', articleMeta(cell, article, username)],
        [
          '.row',
          [
            '.col-xs-12.col-md-8.offset-md-2',
            state.user
              ? [
                  'form.card.comment-form',
                  [
                    '.card-block',
                    [
                      'textarea.form-control',
                      {
                        placeholder: 'Write a comment...',
                        rows: '3',
                        onInput: evt => actions.updateCommentField(cell, evt.target.value),
                        value: state.comment
                      }
                    ]
                  ],
                  [
                    '.card-footer',
                    ['img.comment-author-img', { src: state.user.image || defaultImage }],
                    [
                      'button.btn.btn-sm.btn-primary',
                      {
                        onClick: compose(
                          () => actions.addComment(cell, article.slug, cell.state.comment),
                          preventDefault
                        )
                      },
                      'Post Comment'
                    ]
                  ]
                ]
              : [
                  'p',
                  ['a', { href: router.toUrl(Route.Login) }, 'Sign in'],
                  ' or ',
                  ['a', { href: router.toUrl(Route.Register) }, 'sign up'],
                  ' to add comments on this article.'
                ],
            defaultTo([], state.comments).map(comment => [
              '.card',
              ['.card-block', ['p.card-text', comment.body]],
              [
                '.card-footer',
                [
                  'a.comment-author',
                  { href: router.toUrl(Route.Profile, { username: comment.author.username }) },
                  ['img.comment-author-img', { src: comment.author.image || defaultImage }]
                ],
                ' ',
                [
                  'a.comment-author',
                  { href: router.toUrl(Route.Profile, { username: comment.author.username }) },
                  comment.author.username
                ],
                ['span.date-posted', new Date(comment.createdAt).toDateString()],
                [
                  'span.mod-options',
                  state.user &&
                    comment.author.username === state.user.username && [
                      'i.ion-trash-a',
                      { onClick: actions.deleteComment(cell, article.slug, comment.id) }
                    ]
                ]
              ]
            ])
          ]
        ]
      ]
    ]
  ];
};
