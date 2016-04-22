import { render } from "react-dom";
import createMain from "./labeledSliders";

const element = document.getElementById("app");
createMain(render, element);

