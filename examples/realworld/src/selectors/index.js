export const selectors = {
  route: state => state.route || {},
  page: state => selectors.route(state).page,
  params: state => selectors.route(state).params,
  toRoute: (page, params = {}, options = {}) => ({
    page,
    params,
    ...options
  }),
  fromRoute: route => ({ page: route.value, params: route.params })
}
