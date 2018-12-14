import { getUrl } from "../util/router"

export const service = state => {
  // Display the url in the browser's location bar.
  const url = getUrl(state.route, state.query)
  if (document.location.hash !== url) {
    window.history.pushState({}, "", url)
  }
}
