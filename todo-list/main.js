import meiosis from "meiosis";
import { render } from "react-dom";
import meiosisReact from "meiosis-react";
import createMain from "./todoMain.jsx";

const Meiosis = meiosis(meiosisReact.intoId(render, "app"));

createMain(Meiosis);
