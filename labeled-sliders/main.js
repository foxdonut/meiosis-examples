import { render } from "react-dom";

import createMain from "./labeledSliders.jsx";

const element = document.getElementById("app");

const main = createMain();

// view rendering
main.view$.subscribe(view => render(view, element));

