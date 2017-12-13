import test from "ava";
import $ from "jquery";
import { prepareDom } from "../util";

import { createView } from "../../src/client/operations/view";

let dom = null;
let operationsView = null;

test.beforeEach(function() {
  dom = prepareDom();
  operationsView = createView({});
});

test("operations renders a list of operations", t => {
  const operations = [ "One", "Two" ];
  dom.render(operationsView({ operations }));

  const operationsList = dom.element.find(".operations-list");
  t.is(operationsList.length, 1);

  const operationItems = dom.element.find(".operation-item");
  t.is(operationItems.length, operations.length);

  for (let i = 0, tot = operationItems.length; i < tot; i++) {
    t.is($(operationItems[i]).text(), operations[i]);
  }
});

test("operations renders the selected operation", t => {
  const operations = [ "One", "Two" ];
  const selectedOperation = "Two";
  dom.render(operationsView({ operations, selectedOperation }));

  const operationsList = dom.element.find(".operations-list");
  t.is(operationsList.val(), selectedOperation);
});

test("operations triggers on changing selected operation", t => new Promise(resolve => {
  const operations = [ "One", "Two" ];
  const selectedOperation = "Two";

  operationsView = createView({
    changeSelectedOperation: evt => {
      t.is(evt.target.value, selectedOperation);
      resolve();
    }
  });

  dom.render(operationsView({ operations }));

  const operationsList = dom.element.find(".operations-list");
  operationsList.val(selectedOperation).trigger("change");
}));

test("operations renders a submit button", t => {
  dom.render(operationsView({ operations: [] }));
  const submitButton = dom.element.find("button");

  t.is(submitButton.length, 1);
  t.is(submitButton.text(), "Submit");
});

test("operations renders a disabled button", t => {
  dom.render(operationsView({ operations: [], disabled: true }));
  const submitButton = dom.element.find("button");

  t.is(submitButton.is(":disabled"), true);
});

test("operations triggers an action to submit", t => new Promise(resolve => {
  const model = {
    operations: ["check out", "return"],
    selectedBooks: ["isbn1"],
    selectedOperation: "return"
  };
  operationsView = createView({ submit: m => {
    t.is(m, model);
    resolve();
  }});
  dom.render(operationsView(model));
  const submitButton = dom.element.find("button");

  submitButton.triggerEvent("click");
}));
