import { sv } from "seview"

/* mithril */
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
/* end mithril */

/* react
import React from "react"
import ReactDOM from "react-dom"

const h = sv(node => {
  if (typeof node === "string") {
    return node
  }
  const attrs = node.attrs || {}
  if (attrs.innerHTML) {
    attrs.dangerouslySetInnerHTML = { __html: attrs.innerHTML }
    delete attrs.innerHTML
  }
  const args = [node.tag, node.attrs || {}].concat(node.children || [])
  return React.createElement.apply(null, args)
})

export const render = element => view => ReactDOM.render(h(view), element)
end react */

/* petit-dom
import { h as hyper, mount, patch } from "petit-dom"

const attrMappings = {
  "className": "class",
  "htmlFor": "for"
}

const processAttrs = (attrs = {}) => {
  Object.keys(attrs).forEach(key => {
    if (key.startsWith("on")) {
      const value = attrs[key]
      delete attrs[key]
      attrs[key.toLowerCase()] = value
    }
    else {
      const to = attrMappings[key]
      if (to) {
        const value = attrs[key]
        delete attrs[key]
        attrs[to] = value
      }
    }
  })
  return attrs
}

const h = sv(node =>
  (typeof node === "string")
    ? node
    : hyper(node.tag, processAttrs(node.attrs), node.children || [])
)

let vnode = null
export const render = element => view => {
  const node = h(view)
  if (!vnode) {
    element.appendChild(mount(node))
  }
  else {
    patch(node, vnode)
  }
  vnode = node
}
end petit-dom */

export const defaultImage = "/assets/smiley-cyrus.jpg"
