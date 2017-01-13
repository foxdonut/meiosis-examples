import test from "ava";
import $ from "jquery";

import m from "mithril";

import { randomGifView } from "../../../src/view/mithril/random-gif";
import { randomGif } from "../../../src/random-gif";

const id = "test";
const sel = "#" + id;
let element = null;

test.beforeEach(function() {
  if ($(sel).length === 0) {
    document.write("<div id='" + id + "'></div>");
    element = document.getElementById(id);
  }
});

test("renders the tag in the text input", t => {
  const tag = "Duck Quack";
  const model = randomGif.initialModel();
  model.tag = tag;

  m.render(element, randomGifView(model));

  t.is($(sel).find("input").val(), tag);
});

test("sends the tag with the id when typing in the text input", t => {
  const id = "42";
  const tag = "test";
  const model = randomGif.initialModel(id);
  model.tag = tag;
  m.render(element, randomGifView(model));

  $(sel).find("input").val(tag).trigger("keyup");

  t.deepEqual(randomGif.intents.editTag(), { id, tag });
});
