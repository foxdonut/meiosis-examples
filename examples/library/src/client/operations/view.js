import { defineElement as el } from "domvm";

const operationOption = selectedOperation => operation =>
  el("option.operation-item",
    { value: operation, selected: selectedOperation === operation },
    operation);

export const createView = actions => model => el("div", [
  el("select.operations-list[name=operation]", { onchange: actions.changeSelectedOperation }, [
    el("option[value='']", "-- Select an operation --")
  ].concat(model.operations.map(operationOption(model.selectedOperation)))),
  el("button", { disabled: model.disabled, onclick: [actions.submit, model] }, "Submit")
]);
