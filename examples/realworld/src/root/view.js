export const view = components => state => {
  const { header, footer } = components
  const component = components[state.route.case]

  return ["div", header(state), component(state), footer(state)]
}
