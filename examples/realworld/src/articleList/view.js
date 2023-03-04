import { Route, router } from '../router';
import { defaultImage } from '../util/view';
import { Pager } from '../pager';
import { actions } from './actions';

export const ArticleList = ({ cell }) => [
  cell.state.route.loading // FIXME
    ? ['.article-preview', 'Loading articles...']
    : cell.state.articles.map((article) => {
      const username = article.author.username;

      return ['.article-preview',
        ['.article-meta',
          ['a',
            { href: router.toUrl(Route.Profile, { username: article.author.username }) },
            ['img', { src: article.author.image || defaultImage }]],
          ['.info',
            ['a.author',
              { href: router.toUrl(Route.Profile, { username: article.author.username }) },
              username],
            ['span.date', new Date(article.createdAt).toDateString()]],
          ['.pull-xs-right',
            ['button.btn.btn-sm',
              {
                className: {
                  'btn-primary': article.favorited,
                  'btn-outline-primary': !article.favorited
                },
                onClick: article.favorited
                  ? () => actions.unfavoriteArticle(cell, article.slug)
                  : () => actions.favoriteArticle(cell, article.slug)
              },
              ['i.ion-heart'],
              ['span', ` ${article.favoritesCount} `]]]],
        ['.preview-link',
          ['a.preview-link',
            { href: router.toUrl(Route.ArticleDetail, { slug: article.slug }) },
            ['h1', article.title],
            ['p', article.description],
            ['span', 'Read more...']],
          ['ul.tag-list',
            article.tagList.map((tag) => [
              'li.tag-default.tag-pill.tag-outline',
              ['a', { href: router.toUrl(Route.Home, { tag }) }, tag]
            ])]]];
    }),

  Pager({ cell })
];
