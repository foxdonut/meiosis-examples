export const view = components => model => {
  const { header, footer } = components
  const component = components[model.route.case]

  return ["div",
    header(model),
    ["div", "Route view goes here"],
    component(model),
    footer(model)
  ]
}
