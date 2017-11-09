import test from "ava";
import $ from "jquery";

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

["deku", "diojs", "domvm", "inferno", "mithril", "petit-dom", "picodom", "preact", "react", "snabbdom"].forEach(lib => {

  test(lib, t => {
    const { setupApp } = require("../../" + lib + "/setup");
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
