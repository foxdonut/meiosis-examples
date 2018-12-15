import { getUrl, syncUrl } from "../util/router"

export const service = state => {
  // Display the url in the browser's location bar.
  syncUrl(getUrl(state.route, state.query))
}
