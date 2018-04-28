import m from "mithril";

export const createView = (actions, components) => model =>
  m("form.pure-form.pure-form-aligned",
    m("fieldset",
      components.entryNumber.view(model),
      components.entryDateFrom.view(model),
      components.entryDateTo.view(model),
      components.airTemperature.view(model),
      components.waterTemperature.view(model),

      m("button.pure-button.pure-button-primary",
        { onclick: actions.save(model) }, "Save")
    ),

    m("span", "Saved: ", model.saved)
  );
