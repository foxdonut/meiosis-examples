import React from "react"
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
  if (attrs.onInput) {
    attrs.onChange = attrs.onInput
    delete attrs.onInput
  }
  const args = [node.tag, node.attrs || {}].concat(node.children || [])
  return React.createElement.apply(null, args)
})
