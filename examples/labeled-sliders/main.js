import meiosis from "meiosis";
import { renderer } from "meiosis-snabbdom";
import createMain from "./labeledSliders";

const Meiosis = meiosis.init(renderer.intoId("app"));

createMain(Meiosis);
