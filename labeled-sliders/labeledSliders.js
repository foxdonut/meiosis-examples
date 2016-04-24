import createSliderContainer from "./sliderContainer/main";

export default function(Meiosis) {
  const SliderContainer = createSliderContainer(Meiosis.createComponent);
  Meiosis.run(SliderContainer);
}
