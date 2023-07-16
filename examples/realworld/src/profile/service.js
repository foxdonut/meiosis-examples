import { set } from 'lodash';
import { Route, routeTo } from '../router';
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
  onchange: (state) => state.route.value,
  run: (cell) => {
    if ([Route.Profile, Route.ProfileFavorites].includes(cell.state.route.value)) {
      if (!cell.state.user) {
        cell.update(routeTo(Route.Home));
      } else {
        const { username } = cell.state.route.params;
        const param = cell.state.route.value === Route.Profile ? 'author' : 'favorited';
        loadProfileAndArticles(set({ cell, username }, param, username));
      }
    }
  }
};
