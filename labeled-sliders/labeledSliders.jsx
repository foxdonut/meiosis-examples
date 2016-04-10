import { createLabeledSliderFeature } from "./labeledSlider/feature";

export default function() {
  const labeledSliderFeature = createLabeledSliderFeature({
    initialModel: {
      label: "Height",
      value: 50,
      min: 0,
      max: 200,
      units: "cm"
    }
  });

  const view$ = labeledSliderFeature.view$;

  return { view$ };
}
