import { trace } from 'meiosis'
import tracerView from 'meiosis-tracer'

import { models, update, render } from './src'

document.head.appendChild(
  document.createElement('meiosis')
)

document.head.style.display = 'block' 

trace({ update, dataStreams: [models] })
tracer({ selector: 'meiosis' })

window.rerender = () => render(models())
