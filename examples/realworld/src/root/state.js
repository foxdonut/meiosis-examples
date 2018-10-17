import O from "patchinko/constant"
import { get } from "../util/fp"

const checkSignIn = model => {
  const returnTo = get(model, ["returnTo"])
  if (returnTo != null && model.user) {
    return { navigateTo: returnTo, returnTo: O }
  }
}

const urlInLocationBar = model => {
  // Display the url in the browser's location bar.
  const url = model.url
  if (document.location.hash !== url) {
    window.history.pushState({}, "", url)
  }
}

export const state = model => [
  //checkAuthentication,
  checkSignIn,
  //navigatingToHome,
  //navigatingToArticleDetail,
  urlInLocationBar
].reduce((x, f) => O(x, f(x)), model)
