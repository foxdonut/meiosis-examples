import o from "ospec"
import $ from "jquery"

import m from "mithril"

import { createCounter } from "../../src/counter"
import { h } from "../../src/util/ui"

const id = "test"
const sel = "#" + id
let element = null

o.spec("counter", () => {
  o.beforeEach(() => {
    if ($(sel).length === 0) {
      document.write("<p id='" + id + "'></p>")
      element = document.getElementById(id)
    }
  })

  o("renders the tag in the text input", () => {
    const counter = createCounter("Pizza")()
    const model = counter.model()

    m.render(element, h(counter.view(model)))

    o($(sel).find("div").html()).equals("Pizza: 0")
  })

/*
  o("sends the tag with the id when typing in the text input", t => {
    const id = "42"
    const tag = "test"
    const model = randomGif.initialModel(id)
    model.tag = tag
    m.render(element, randomGifView(model))

    $(sel).find("input").val(tag).trigger("keyup")

    t.deepEqual(randomGif.intents.editTag(), { id, tag })
  })
*/
})
