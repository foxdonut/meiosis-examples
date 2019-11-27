import merge from "mergerino"
import m from "mithril"
import stream from "mithril/stream"
import meiosis from "meiosis-setup/mergerino"

import { app, App } from "./app"

const { states, actions } = meiosis({ stream, merge, app })

m.mount(document.getElementById("app"), { view: () => m(App, { state: states(), actions }) })
states.map(() => m.redraw())
