import React from 'react'
import { render } from 'react-dom'
import signals from 'mini-signals'

export default function start(model, Component, nodeId) {

  const signal = new signals()

  const node = document.getElementById(nodeId)

  function redraw(actions){
    model = Component.update(actions,model)
    render(
      <Component.view dispatch={signal.dispatch.bind(signal)} model={model} />,
      node
    )
  }

  signal.add(redraw)
  signal.dispatch([])

}
