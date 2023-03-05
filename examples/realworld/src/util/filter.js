import { assoc } from '../util/fp';
import { Route } from '../router';

export const getArticlesFilter = (state) => {
  const filter = ['feed', 'offset', 'tag'].reduce(
    (result, param) => assoc(param, state.route.params[param], result),
    {}
  );
  filter.offset = Number(filter.offset) || 0;
  filter.limit = 10;

  if (state.route.value === Route.Profile) {
    filter.author = state.route.params.username;
  } else if (state.route.value === Route.ProfileFavorites) {
    filter.favorited = state.route.params.username;
  }

  return filter;
};
