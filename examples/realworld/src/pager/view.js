import { range } from '../util/fp';
import { getArticlesFilter } from '../util/filter';
import { router } from '../router';

export const Pager = ({ cell }) => {
  const state = cell.state;
  const filter = getArticlesFilter(state);
  const currentPageNumber = filter.offset / filter.limit + 1;
  const pageList = range(1, Math.ceil(state.articlesCount / filter.limit) + 1);
  const from = filter.offset + 1;
  const to = Math.min(from + filter.limit - 1, state.articlesCount);
  const params = state.route.params;

  return [
    'nav',
    [
      'ul.pagination',
      pageList.map(pageNumber => [
        'li.page-item',
        { className: { active: pageNumber === currentPageNumber } },
        [
          'a.page-link',
          {
            href: router.toUrl(state.route.page, {
              ...params,
              offset: (pageNumber - 1) * filter.limit
            })
          },
          pageNumber
        ]
      ])
    ],
    state.articlesCount > 0
      ? ['div', 'Displaying ', from, ' - ', to, ' of ', state.articlesCount]
      : ['div', 'No articles here... yet.']
  ];
};
