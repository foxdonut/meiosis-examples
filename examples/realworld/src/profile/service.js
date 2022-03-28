import { Route } from '../router';
import { getArticlesFilter } from '../util/filter';
import { articlesApi, profileApi } from '../services';

const loadProfileAndArticles = ({ cell, username, author, favorited }) => {
  const filter = getArticlesFilter(cell.state);

  return Promise.all([
    !cell.state.profile || cell.state.profile.username !== username
      ? profileApi.get(username)
      : null,
    articlesApi.getList({
      limit: filter.limit,
      offset: filter.offset,
      author,
      favorited
    })
  ]).then(cell.update);
};

export const service = {
  onchange: (state) => state.route.page,
  run: (cell) => {
    if (cell.state.route.page === Route.Profile) {
      const { username } = cell.state.route.params;
      loadProfileAndArticles({ cell, username, author: username });
    } else if (cell.state.route.page === Route.ProfileFavorites) {
      const { username } = cell.state.route.params;
      loadProfileAndArticles({ cell, username, favorited: username });
    }
  }
};
