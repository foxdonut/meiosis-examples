import { createSliderContainerFeature } from "./sliderContainer/feature";

export default function() {
  const sliderContainerFeature = createSliderContainerFeature();
  const view$ = sliderContainerFeature.view$;
  return { view$ };
}
