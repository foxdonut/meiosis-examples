import { HomePage, navigateTo } from "../util/router"

export const actions = update => ({
  navigateToFeedTab: () => update(Object.assign(navigateTo(HomePage), { feed: true }))
})
