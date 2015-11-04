import React from 'react'
import * as Counter from './counter'
import signals from 'mini-signals'

const RESET = 'RESET'
const TOP = 'TOP'
const BOTTOM = 'BOTTOM'

const forward = (dispatch, actions) => (child) => {
  dispatch(actions.concat(child))
}

export function update(actions, model){

  let action = actions.shift()

  switch (action) {
    case RESET:
      return {topCounter: 0, bottomCounter: 0}
    case TOP:
      return {topCounter: Counter.update(actions, model.topCounter),
              bottomCounter: model.bottomCounter}
    case BOTTOM:
      return {topCounter: model.topCounter,
              bottomCounter: Counter.update(actions, model.bottomCounter)}
    default:
      return model
  }
}

export function view({dispatch, model}){
  return (
    <div>
      <Counter.view dispatch={forward(dispatch,[TOP])} model={model.topCounter}/>
      <Counter.view dispatch={forward(dispatch,[BOTTOM])} model={model.bottomCounter}/>
      <button onClick={() => dispatch([RESET])}>{'Reset'}</button>
    </div>
  )
}
