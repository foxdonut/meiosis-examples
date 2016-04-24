import meiosis from "meiosis";
import { render } from "react-dom";
import createMain from "./todoMain.jsx";

const element = document.getElementById("app");
const adapters = { render: view => render(view, element) };
const Meiosis = meiosis(adapters);

createMain(Meiosis);

