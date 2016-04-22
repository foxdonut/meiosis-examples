import meiosis from "meiosis";
import createSliderContainer from "./sliderContainer/main";

export default function(render, element) {
  const adapters = {
    render: view => render(view, element)
  };
  const Meiosis = meiosis(adapters);
  const createComponent = Meiosis.createComponent;

  const SliderContainer = createSliderContainer(createComponent);
  Meiosis.run(SliderContainer);
}
