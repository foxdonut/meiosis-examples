export const view = components => model => {
  const { header, footer } = components
  const component = components[model.route.case]

  return ["div",
    header(model),
    component(model),
    footer(model)
  ]
}
