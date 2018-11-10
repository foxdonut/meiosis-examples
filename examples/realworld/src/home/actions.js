import { HomePage, navigateTo } from "../util/router"

export const actions = update => ({
  navigateToYourFeed: () => update(Object.assign(navigateTo(HomePage), { feed: true })),
  navigateToGlobalFeed: () => update(Object.assign(navigateTo(HomePage), { feed: false }))
})
