import test from "ava";
import $ from "jquery";

import { render } from "react-dom";

import { randomGifView } from "../../../src/view/react/random-gif.jsx";
import { randomGif } from "../../../src/random-gif";

const id = "test";
const sel = "#" + id;
let element = null;

$.fn.triggerEvent = function(eventType) {
  const event = document.createEvent("HTMLEvents");
  event.initEvent(eventType, true, true);
  $(this)[0].dispatchEvent(event);
};

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

  render(randomGifView(model), element);

  t.is($(sel).find("input").val(), tag);
});

test("sends the tag with the id when typing in the text input", t => {
  const id = "42";
  const tag = "test";
  const model = randomGif.initialModel(id);
  model.tag = tag;
  render(randomGifView(model), element);

  $(sel).find("input").val(tag).triggerEvent("input");

  t.deepEqual(randomGif.intents.editTag(), { id, tag });
});
