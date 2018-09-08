import { HomePage } from "../util/constants"

export const createNotFound = ({ navigator }) => ({
  view: _model => ["div",
    ["div", "Sorry, we could not find what you were looking 4...04"],
    ["div", ["a", { href: navigator.getUrl(HomePage) }, "Return to Home Page"]]
  ]
})
