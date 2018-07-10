import test from "ava";
import $ from "jquery";
import { createView } from "../../common/temperature/view.jsx";

const id = "app";
const sel = "#" + id;
let element = null;

$.fn.triggerEvent = function(eventType) {
  const event = document.createEvent("HTMLEvents");
  event.initEvent(eventType, true, true);
  $(this)[0].dispatchEvent(event);
};

test.beforeEach(function() {
  $(sel).remove();
  document.write("<div id='" + id + "'></div>");
  element = $(sel);
});

const libs =
  [ "domvm"
  //, "diojs"
  , "inferno"
  , "mithril"
  , "petit-dom"
  , "preact"
  , "react"
  , "snabbdom"
  ];

const exts = [ "js", "jsx" ];

libs.forEach(lib => {
  exts.forEach(ext => {

    test.serial(lib + " " + ext + " integration tests", t => {
      const { setupApp } = require("../../" + lib + "/setup." + ext);
      setupApp();

      // Verify presence of elements
      t.is(element.find("input[type=checkbox]").length, 1);
      t.is(element.find("input[type=radio]").length, 3);
      t.is(element.find("input[type=text]").length, 1);
      t.is(element.find("button").length, 3);

      // Verify rendering of initial model
      t.is(element.find(".tempValue").text(), "20");
      t.is(element.find(".tempUnits").text(), "C");

      // Verify click -> update model -> re-render view
      element.find(".increase").click();
      t.is(element.find(".tempValue").text(), "21");

      element.find(".changeUnits").click();
      t.is(element.find(".tempValue").text(), "70");
      t.is(element.find(".tempUnits").text(), "F");

      const cb = element.find("input[type=checkbox]");
      t.is(cb.is(":checked"), false);
      cb.click();
      t.is(cb.is(":checked"), true);

      const rb = element.find("#snow");
      t.is(rb.is(":checked"), false);
      rb.click();
      t.is(rb.is(":checked"), true);
    });

  });
});

const model = {
  "precipitations": false,
  "precipitation": null,
  "date": "",
  "value": 20,
  "units": "C"
};

libs.forEach(lib => {

  test.serial(lib + " action trigger tests", t => {
    return new Promise(resolve => {
      const { setupRender } = require("../../" + lib + "/setup.jsx");
      const render = setupRender();

      // Verify that click triggers action
      const actions = {
        changePrecipitation: () => {
          t.pass();
          resolve();
        }
      };
      const view = createView(actions);

      render(view(model), element[0]);

      var rb = element.find("#snow");
      t.is(rb.length, 1);
      rb.click();
      rb.triggerEvent("change");
    });
  });

});
