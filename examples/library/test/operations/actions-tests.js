import test from "ava";

import * as Actions from "../../src/client/operations/actions";

test("setSelectedOperation", t => {
  const model1 = {
    operations: ["One", "Two"],
    selectedOperation: ""
  };

  const selectedOperation = "Two";

  const model2 = Actions.setSelectedOperation(selectedOperation)(model1);

  t.is(model2.operations, model1.operations);
  t.is(model2.selectedOperation, selectedOperation);
});

test("changeSelectedOperation", t => new Promise(resolve => {
  const model1 = {
    operations: ["One", "Two"],
    selectedOperation: ""
  };

  const selectedOperation = "Two";

  const update = fn => {
    const model2 = fn(model1);

    t.is(model2.operations, model1.operations);
    t.is(model2.selectedOperation, selectedOperation);

    resolve();
  };

  const actions = Actions.createActions(update);
  actions.changeSelectedOperation({ target: { value: selectedOperation } });
}));
