import { Route } from "../util/router"

export const actions = ({ navigate }) => ({
  navigateToYourFeed: () => navigate(Object.assign(Route.of.Home(), { feed: true })),
  navigateToGlobalFeed: () => navigate(Object.assign(Route.of.Home(), { feed: false }))
})
