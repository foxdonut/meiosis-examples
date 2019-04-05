import { Route, navigateTo } from "../util/router"

export const actions = update => ({
  navigateToYourFeed: () =>
    update(Object.assign(navigateTo(Route.of.Home), { tag: null, feed: true })),
  navigateToGlobalFeed: () =>
    update(Object.assign(navigateTo(Route.of.Home), { tag: null, feed: false }))
})
