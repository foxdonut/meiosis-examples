import { sv } from "seview"
import m from "mithril"

const processAttrs = (attrs = {}) => {
  Object.keys(attrs).forEach(key => {
    if (key.startsWith("on")) {
      const value = attrs[key]
      delete attrs[key]
      attrs[key.toLowerCase()] = value
    }
  })
  return attrs
}

const h = sv(node =>
  (typeof node === "string")
    ? { tag: "#", children: node }
    : node.attrs && node.attrs.innerHTML
      ? m(node.tag, m.trust(node.attrs.innerHTML))
      : m(node.tag, processAttrs(node.attrs), node.children || [])
)

export const render = element => view => m.render(element, h(view))

export const defaultImage = "/assets/smiley-cyrus.jpg"
