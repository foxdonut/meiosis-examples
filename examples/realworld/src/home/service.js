import { articlesApi, loadArticlesAndTags } from '../services';
import { pick } from '../util/fp';
import { getArticlesFilter } from '../util/filter';
import { Route } from '../router';

export const service = {
  onchange: (state) => state.route.page,
  run: (cell) => {
    if (cell.state.route.page === Route.Home) {
      const filter = getArticlesFilter(cell.state);

      filter.feed
        ? articlesApi.getFeed(pick(['limit', 'offset'], filter)).then(cell.update)
        : loadArticlesAndTags(filter).then(cell.update);
    }
  }
};
