import { propPathOr, tap } from "crocks"
import O from "patchinko/overloaded"

export const preventDefault = tap(evt => evt.preventDefault())
export const targetValue = propPathOr(null, ["target", "value"])

export const nestPatch = (object, path) => ({
  [path[0]]: path.length === 1
    ? O(object)
    : O(nestPatch(object, path.slice(1)))
})

export const nestUpdate = (update, path) => patch =>
  update(nestPatch(patch, path))

export const nestCreateComponent = (create, update, path) => {
  const component = create(nestUpdate(update, path))
  const result = O({}, component)
  if (component.model) {
    result.model = () => nestPatch(component.model(), path)
  }
  if (component.view) {
    result.view = model => component.view(propPathOr(null, path, model))
  }
  return result
}

/*
import m from "mithril"
import { assoc, compose, lensPath, merge, over, path as Rpath } from "ramda"

export const nest = (update, path) => compose(update, over(lensPath(path)))

export const nestComponent = (create, update, path) => {
  const view = create(nest(update, path))
  return compose(view, Rpath(path))
}

export const mlink = () => ({
  oncreate: m.route.link,
  onupdate: m.route.link
})

export const profileLink = (username, isFavorites) =>
  merge({ href: "/profile/" + username + (isFavorites ? "/favorites" : "") }, mlink())

const getTags = article => (article.tags && (typeof article.tags === "string")) ?
  (article.tags.replace(/,/g, " ").replace(/ {2,}/g, " ").replace(/ *$/, "").split(" "))
  : article.tagList

export const viewModel = model =>
  merge(model, {
    signedIn: !!Rpath(["user", "token"], model),
    article: assoc("tagList", getTags(model.article), model.article)
  })
*/