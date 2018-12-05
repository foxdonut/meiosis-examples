const precipitationOption = ({ model, actions, id, value, label }) =>
  ["span",
    [`input:radio#${id}[name=precipitation]`, {
      value, checked: model.precipitation === value,
      onChange: actions.changePrecipitation
    }],
    ["label", { htmlFor: id }, label]
  ]

export const view = (model, actions) =>
  ["div",
    ["div",
      ["input:checkbox#precipitations", {
        checked: model.precipitations,
        onChange: actions.togglePrecipitations
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
      ["input:text[size=10]", { value: model.date, onInput: actions.editDate }]
    ],
    ["span", "Temperature: "],
    ["span.tempValue", model.value],
    ["span", { innerHTML: "&deg;" }],
    ["span.tempUnits", model.units],
    ["div",
      ["button.btn.btn-default.increase", { onClick: () => actions.increase( 1) }, "Increase"],
      ["button.btn.btn-default.decrease", { onClick: () => actions.increase(-1) }, "Decrease"]
    ],
    ["div",
      ["button.btn.btn-primary.changeUnits", { onClick: actions.changeUnits }, "Change Units"]
    ]
  ]
