import preact from "preact"
import { sv } from "seview"

export const h = sv(node => {
  if (typeof node === "string") {
    return node
  }
  const attrs = node.attrs || {}
  if (attrs.innerHTML) {
    attrs.dangerouslySetInnerHTML = { __html: attrs.innerHTML }
    delete attrs.innerHTML
  }
  return preact.h(node.tag, node.attrs || {}, node.children || [])
})
