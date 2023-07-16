import { defaultTo } from 'lodash';
import { Route, router } from '../router';

export const PopularTags = ({ cell }) => [
  ['p', 'Popular Tags'],

  ['.tag-list',
    cell.state.tags == null ? ['span', 'Loading tags...'] : null,
    defaultTo(cell.state.tags, []).map((tag) =>
      ['a.tag-pill.tag-default',
        { href: router.toUrl(Route.Home, { tag }) },
        tag])]
];
