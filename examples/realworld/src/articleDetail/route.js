import { helpers } from "../root/helpers"

export const route = update => ({
  ArticleDetail: {
    route: "/article/:slug",
    navigate: ({ slug }) =>
      helpers.loadArticle({ slug }).then(update)
  }
})

/*

view = f(model)
model contains current route
fold() renders view according to route

getUrl provides link

when route changes:
- parseUrl finds the matching route
- route provides patch
- patch is merged with url and params
- for navigateTo, return patch
- for listening to route change, update(patch)

*when route changes:
- parseUrl finds the matching route
- fold() performs action(s) according to route
- action may need to check e.g. if logged in, if not redirect to other route
- route should be merged into the model to render view

- update
- Route from "static" imports

- actions from update and Route
- route view needs actions, other deps, Route, model
- route navigate needs update, model

What about a stream of route changes?
- routes = route ... route ... route

*/
