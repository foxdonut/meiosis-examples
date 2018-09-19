const m = require("mithril")
//const b = require("bss")
const { sv } = require("seview")

//exports.button = b.d("block").mt(4).p(8).w("8rem").br(".25rem").c("white")

exports.h = sv(node =>
  (typeof node === "string")
    ? { tag: "#", children: node }
    : node.attrs && node.attrs.innerHTML
      ? m(node.tag, m.trust(node.attrs.innerHTML))
      : m(node.tag, node.attrs || {}, node.children || [])
)
