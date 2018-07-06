import { safe, wrap } from "../handler";

const precipitationOption = ({ model, actions, id, value, label }) =>
  ["span",
    [`input:radio#${id}[name=precipitation]`, {
      value, checked: model.precipitation === value,
      onClick: safe(actions.changePrecipitation)
    }],
    ["label", { htmlFor: id }, label]
  ];

export const createView = actions => model =>
  ["div",
    ["div",
      ["input:checkbox#precipitations", {
        checked: model.precipitations,
        onClick: safe(actions.togglePrecipitations)
      }],
      ["label", { htmlFor: "precipitations" }, "Precipitations"]
    ],
    ["div",
      precipitationOption({ model, actions, id: "rain", value: "RAIN", label: "Rain"}),
      precipitationOption({ model, actions, id: "snow", value: "SNOW", label: "Snow"}),
      precipitationOption({ model, actions, id: "sleet", value: "SLEET", label: "Sleet"})
    ],
    ["div",
      "Date:",
      ["input:text[size=10]", { value: model.date, onInput: safe(actions.editDate) }]
    ],
    ["span", "Temperature:"],
    ["span.tempValue", model.value],
    "&deg;",
    ["span.tempUnits", model.units],
    ["div",
      ["button.btn.btn-default.increase", { onClick: wrap(actions.increase, 1) }, "Increase"],
      ["button.btn.btn-default.decrease", { onClick: wrap(actions.increase, -1) }, "Decrease"]
    ],
    ["div",
      ["button.btn.btn-primary.changeUnits", { onClick: safe(actions.changeUnits) }, "Change Units"]
    ]
  ];
