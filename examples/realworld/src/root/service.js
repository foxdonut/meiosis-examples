import { getUrl } from "../util/router"

export const service = model => {
  // Display the url in the browser's location bar.
  const url = getUrl(model.route, model.query)
  if (document.location.hash !== url) {
    window.history.pushState({}, "", url)
  }
}
