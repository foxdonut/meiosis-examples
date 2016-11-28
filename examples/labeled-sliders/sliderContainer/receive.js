import { Action } from "./actions";

const rnd = (min, max) => Math.round(Math.random() * min) + (max || 0);

const transform = (model, proposal) => Action.case({
  AddMeasurement: () =>
    assoc("nextId",
      model.nextId + 1,
      assoc("measurements",
        append({
          id: model.nextId,
          label: "Measurement",
          value: rnd(50),
          max: rnd(50,100),
          units: rnd(10) % 2 === 0 ? "cm" : "mm"
        }, model.measurements),
        model
      )
    ),

  RemoveMeasurement: id =>
    assoc("measurements", model.measurements.filter(m => m.id !== id), model)
}, proposal);

const receive = sliders => (model, proposal) => {
  Action.case({
    AddMeasurement: () => {
      const id = uuid.v1();
      model.sliderIds.push(id);

      const randomGif = randomGifComponent(id);
      randomGifComponents[id] = randomGif;
      model[id] = randomGif.initialModel({});
    },
    RemoveMeasurement: id => {
      delete model[id];
      delete sliders[id];
      model.randomGifIds.splice(model.randomGifIds.indexOf(id), 1);
    },
    UpdateMeasurement: (id, value) => {
      model[id] = sliders[id].receive(model[id], proposal);
    }
  }, proposal);
  return model;
};

export default receive;
