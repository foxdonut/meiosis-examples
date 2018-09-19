const m = require("mithril")
//const b = require("bss")
const { sv } = require("seview")

exports.button = ".db.w4.mt2.pa2.white.br2"

exports.h = sv(node =>
  (typeof node === "string")
    ? { tag: "#", children: node }
    : node.attrs && node.attrs.innerHTML
      ? m(node.tag, m.trust(node.attrs.innerHTML))
      : m(node.tag, node.attrs || {}, node.children || [])
)
