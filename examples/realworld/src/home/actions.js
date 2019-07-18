import { Route, navigateTo } from "../routes"

export const Actions = update => ({
  navigateToYourFeed: () => update([navigateTo(Route.Home()), { tag: null, feed: true }]),
  navigateToGlobalFeed: () => update([navigateTo(Route.Home()), { tag: null, feed: false }])
})
