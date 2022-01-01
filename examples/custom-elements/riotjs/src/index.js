import { component } from "riot"
import { setupCell } from "./meiosis"
import App from "./app/app.riot"

import { app, createCells } from "./app"

const rootCell = setupCell(app)
const cells = createCells(rootCell)

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

// Only for using Meiosis Tracer in development.
meiosisTracer({ selector: "#tracer", rows: 25, streams: [rootCell.getState] })

const element = document.getElementById("app")
component(App)(element, { cells })
