import { assoc } from '../util/fp';

export const getArticlesFilter = (state) => {
  const filter = ['feed', 'offset', 'tag'].reduce(
    (result, param) => assoc(param, state.route.params[param], result),
    {}
  );
  filter.offset = Number(filter.offset) || 0;
  filter.limit = 10;

  return filter;
};
