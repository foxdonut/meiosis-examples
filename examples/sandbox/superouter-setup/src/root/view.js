export const view = components => model => {
  const { header, footer } = components
  const component = components[model.pageId]

  return ["div",
    header(model),
    component(model),
    footer(model)
  ]
}
