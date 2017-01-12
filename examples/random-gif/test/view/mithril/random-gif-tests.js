import test from "ava";
import $ from "jquery";

import { on, run } from "meiosis";
import m from "mithril";

import { randomGif as randomGifView} from "../../../src/view/mithril/random-gif";
import { randomGif } from "../../../src/random-gif";

const id = "app";
let app = null;
let model = null;

(function() {
  document.write("<div id='" + id + "'></div>");
  model = randomGif.initialModel();
  const receive = (model, _proposal) => model;
  app = run({ initialModel: model, scanner: { model: receive } });
  const element = document.getElementById("app");
  const render = model => m.render(element, randomGifView(model));
  on(render, app.model);
})();

test("renders the tag in the text input", t => {
  const tag = "Duck Quack";
  model.tag = tag;
  app.model(model);
  t.is($("input").val(), tag);
});
