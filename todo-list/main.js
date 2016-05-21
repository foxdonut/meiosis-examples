import { init } from "meiosis";
import { renderer } from "meiosis-react";
import createMain from "./todoMain.jsx";

const Meiosis = init(renderer.intoId("app"));

createMain(Meiosis);
