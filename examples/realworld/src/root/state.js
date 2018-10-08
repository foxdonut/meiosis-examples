import O from "patchinko/constant"
import { get, pipe } from "../util/fp"

const checkSignIn = model => {
  const returnTo = get(model, ["returnTo"])
  if (returnTo != null && model.context.user) {
    return O(model, { navigateTo: returnTo, returnTo: O })
  }
  return model
}

const urlInLocationBar = model => {
  // Display the url in the browser's location bar.
  const url = model.url
  if (document.location.hash !== url) {
    window.history.pushState({}, "", url)
  }
  return model
}

export const state = pipe(
  //checkAuthentication,
  checkSignIn,
  //navigatingToHome,
  //navigatingToArticleDetail,
  urlInLocationBar
)
