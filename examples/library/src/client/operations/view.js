import { defineElement as el } from "domvm";

const operationOption = selectedOperation => operation =>
  el("option.operation-item",
    { value: operation, selected: selectedOperation === operation },
    operation);

export const createView = actions => model =>
  el("select.operations-list[name=operation]", { onchange: actions.changeSelectedOperation }, [
    el("option[value='']", "-- Select an operation --"),
    model.operations.map(operationOption(model.selectedOperation))
  ]);
