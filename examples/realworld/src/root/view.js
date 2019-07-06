import { Header, Footer } from "../layout"

export const Root = ({ state, actions }) => {
  // const Component = components[state.route.case]

  // return ["div", header(state), component(state), footer(state)]
  return ["div", Header({ state }), Footer()]
}

