import meiosis from "meiosis";
import meiosisSnabbdom from "meiosis-snabbdom";
import createMain from "./labeledSliders";

const Meiosis = meiosis(meiosisSnabbdom.intoId("app"));

createMain(Meiosis);
