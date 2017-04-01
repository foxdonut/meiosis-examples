export const createActions = (events: any) => ({
  clearCompleted: () => events.clearCompleted(true),
  filterBy: (filterBy: string) => () => events.routeChange("/" + filterBy)
});
