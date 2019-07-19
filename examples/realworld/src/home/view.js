import { Route } from "../routes"
import { router } from "../router"
import { compose, preventDefault } from "../util/fp"

import { Articles } from "../articles"
import { PopularTags } from "../popularTags"

export const Home = ({ state, actions }) => {
  const content = state.articlesFilter.tag
    ? {
        globalFeed: false,
        tagFeedComponent: [
          "li.nav-item",
          ["a.nav-link.active", ["i.ion-pound"], " ", state.articlesFilter.tag]
        ]
      }
    : {
        globalFeed: !state.feed,
        tagFeedComponent: null
      }

  return [
    ".home-page",
    !state.user && [
      ".banner",
      [
        ".container",
        ["h1.logo-font", "conduit"],
        ["p", "A place to share your ", ["i", "Meiosis"], " knowledge."]
      ]
    ],
    [
      ".container page",
      [
        ".row",
        [
          ".col-md-9",
          [
            ".feed-toggle",
            [
              "ul.nav.nav-pills.outline-active",
              state.user && [
                "li.nav-item",
                [
                  "a.nav-link",
                  {
                    href: router.toPath([Route.Home()]),
                    onClick: compose(
                      actions.navigateToYourFeed,
                      preventDefault
                    ),
                    className: { active: state.feed }
                  },
                  "Your Feed"
                ]
              ],
              [
                "li.nav-item",
                [
                  "a.nav-link",
                  {
                    href: router.toPath([Route.Home()]),
                    onClick: compose(
                      actions.navigateToGlobalFeed,
                      preventDefault
                    ),
                    className: { active: content.globalFeed }
                  },
                  "Global Feed"
                ]
              ],
              content.tagFeedComponent
            ]
          ],
          state.loading || !state.articles
            ? [".article-preview", "Loading articles..."]
            : Articles({ state, actions })
        ],
        [".col-md-3", [".sidebar", PopularTags({ state })]]
      ]
    ]
  ]
}
