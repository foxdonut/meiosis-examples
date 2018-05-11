import { start } from "realworld-state";
import { createView, render } from "realworld-view";

start().then(({ update, states }) => {
  const view = createView(update);
  const element = document.getElementById("app");
  states.map(state => render(view(state), element));
});
