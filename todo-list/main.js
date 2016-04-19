import { render } from "react-dom";
import createMain from "./todoMain.jsx";

const element = document.getElementById("app");
createMain(render, element);

