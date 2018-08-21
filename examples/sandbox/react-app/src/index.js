import React from "react";
import ReactDOM from "react-dom";
import flyd from "flyd";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const update = flyd.stream();
const models = flyd.scan((model, func) => func(model), { counter: 0, name: "" }, update);

ReactDOM.render(<App update={update} models={models} />, document.getElementById("root"));
registerServiceWorker();
