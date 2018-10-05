import O from "patchinko/constant"
import { get, pipe } from "../util/fp"
//import { LoginPage } from "../login"
//import { SettingsPage } from "../settings"
//import { getNav } from "../navigator"

/*
const checkAuthentication = model => {
  const navigateTo = get(model, ["navigateTo", "pageId"])
  if (navigateTo !== model.pageId && navigateTo === SettingsPage && !model.context.user) {
    return O(model, { navigateTo: getNav(LoginPage), returnTo: getNav(SettingsPage) })
  }
  return model
}
*/

const checkSignIn = model => {
  const returnTo = get(model, ["returnTo"])
  if (returnTo != null && model.context.user) {
    return O(model, { navigateTo: returnTo, returnTo: O })
  }
  return model
}

const doNavigateTo = model => O(model, model.navigateTo)

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
  doNavigateTo,
  urlInLocationBar
)
