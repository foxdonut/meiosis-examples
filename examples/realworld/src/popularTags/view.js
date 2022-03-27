import { defaultTo, path } from '../util/fp';
import { Route, router } from '../router';

export const PopularTags = ({ cell }) => [
  ['p', 'Popular Tags'],

  [
    '.tag-list',
    cell.state.tags == null ? ['span', 'Loading tags...'] : null,
    defaultTo([], path(['tags'], cell.state)).map(tag => [
      'a.tag-pill.tag-default',
      { href: router.toUrl(Route.Home, { tag }) },
      tag
    ])
  ]
];
