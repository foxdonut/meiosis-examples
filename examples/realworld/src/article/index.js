import { ArticleCreateEffect, ArticleViewEffect } from "./effect"
import { Route } from "../router"

export const article = {
  RouteChange: {
    [Route.ArticleCreate]: ArticleCreateEffect,
    [Route.ArticleDetail]: ArticleViewEffect,
    [Route.ArticleEdit]: ArticleViewEffect
  }
}
