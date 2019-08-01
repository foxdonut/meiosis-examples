/* mithril
import m from "mithril"
import { h } from "seview/mithril"

export const render = (view, element) => m.render(element, h(view))
end mithril */

/* preact */
import preact from "preact"
import { h } from "seview/preact"

export const render = (view, element) => preact.render(h(view), element, element.lastElementChild)
/* end preact */

/* react
import ReactDOM from "react-dom"
import { h } from "seview/react"

export const render = (view, element) => ReactDOM.render(h(view), element)
end react */

export const defaultImage = "/assets/smiley-cyrus.jpg"
