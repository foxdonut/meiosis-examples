/* global ReactDOM */
import flyd from "flyd";

const initialModel = {
  counter: 0
};

const createActions = update => ({
  increment: () => update(model => {
    model.counter++;
    return model;
  })
});

const createView = actions => model => (
  <div>
    <div>Counter is {model.counter}</div>
    <button onClick={actions.increment}>Increment</button>
  </div>
);

const update = flyd.stream();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const view = createView(createActions(update));
const element = document.getElementById("app");
models.map(model => ReactDOM.render(view(model), element));

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
trace({ update, dataStreams: [ models ]});
