const m = require("mithril")
//const b = require("bss")
const { sv } = require("seview")

exports.button = ".db.w4.mt2.pa2.white.br2"

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

exports.h = sv(node =>
  (typeof node === "string")
    ? { tag: "#", children: node }
    : node.attrs && node.attrs.innerHTML
      ? m(node.tag, m.trust(node.attrs.innerHTML))
      : m(node.tag, processAttrs(node.attrs), node.children || [])
)
