import { ReactElement } from "react";
import { render } from "react-dom";
import { startApp } from "./index";
import { view } from "./app/view-react.tsx";

startApp(view, (element: Element, view: ReactElement<any>) => render(view, element));
