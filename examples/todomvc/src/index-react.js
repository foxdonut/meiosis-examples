import { render } from "react-dom";
import { startApp } from "./index";
import { view } from "./app/view-react.jsx";

startApp(view, (element, view) => render(view, element));
