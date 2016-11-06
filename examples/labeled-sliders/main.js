import { run } from "meiosis";
import { renderer } from "meiosis-snabbdom";
import createSliderContainer from "./sliderContainer/main";

const SliderContainer = createSliderContainer();
run({ renderer: renderer().intoId(document, "app"), rootComponent: SliderContainer });
