import { init } from "meiosis";
import { renderer } from "meiosis-react";
import runapp from "./runapp.jsx";
import Type from "union-type";

Type.check = false;

const Meiosis = init(renderer.intoId("app"));

runapp(Meiosis);
