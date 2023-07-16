import { articlesApi, loadArticlesAndTags } from '../services';
import { getArticlesFilter } from '../util/filter';
import { Route } from '../router';
import { pick } from 'lodash';

export const service = {
  onchange: (state) => {
    const params = state.route.params;
    return state.route.value + params.tag + params.offset + params.feed;
  },
  run: (cell) => {
    if (cell.state.route.value === Route.Home) {
      const filter = getArticlesFilter(cell.state);

      filter.feed
        ? articlesApi.getFeed(pick(filter, ['limit', 'offset'])).then(cell.update)
        : loadArticlesAndTags(filter).then(cell.update);
    }
  }
};
