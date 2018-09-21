import { assoc } from "ramda";

export const createActions = update => ({
  navigateTo: pageId => update(
    assoc("pageId", pageId)
  )
});
