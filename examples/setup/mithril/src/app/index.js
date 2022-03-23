import m from "mithril"

import { temperature, Temperature } from "../temperature"

import "polythene-css/dist/polythene.css"
import "polythene-css/dist/polythene-typography.css"

export const app = {
  initial: temperature.initial
}

export const App = {
  view: ({ attrs: { cell } }) => m(Temperature, { cell })
}
