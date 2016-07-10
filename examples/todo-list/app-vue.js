import { init } from "meiosis";
import runapp from "./runapp-vue";
import Type from "union-type";

Type.check = false;

const Meiosis = init({render: function() { }});

runapp(Meiosis);
