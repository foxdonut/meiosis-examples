export const navigateTo = route =>
  ({ route: { current: Array.isArray(route) ? route : [route] } });

export const Actions = update => ({
  navigateTo: route => update(navigateTo(route))
});
