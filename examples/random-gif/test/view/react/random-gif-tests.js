import test from "ava";
import $ from "jquery";

import { render } from "react-dom";

import { randomGifView } from "../../../src/view/react/random-gif.jsx";
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

  render(randomGifView(model), element);

  t.is($(sel).find("input").val(), tag);
});
