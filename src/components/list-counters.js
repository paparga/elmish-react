import React from 'react'
import * as Counter from './counter'
import signals from 'mini-signals'

const INSERT = 'INSERT'
const REMOVE = 'REMOVE'
const MODIFY = 'MODIFY'

const forward = (dispatch, actions) => (child) => {
  dispatch(actions.concat(child))
}

export function update(actions, model){
  let action = actions.shift()
  if (action == undefined) {
    return model
  }
  switch (action.type || action) {
    case INSERT:
      let counter = {id: model.nextId, model: 0}
      let nextId = model.nextId + 1
      model.counters.push(counter)
      return {counters: model.counters, nextId }

    case REMOVE:
      model.counters.pop()
      return model

    case MODIFY:
      for (var i = 0; i < model.counters.length; i++) {
        if (action.id == model.counters[i].id) {
          let counterModel = model.counters[i].model
          model.counters[i].model = Counter.update(actions, counterModel)
        }
      }
      return model

    default:
      return model
  }
}

export function view({dispatch, model}){
  let counterList = model.counters.map((counter) => {
    return <div key={counter.id}>
            <Counter.view dispatch={forward(dispatch,[{type: MODIFY, id: counter.id}])} model={counter.model}/>
           </div>
  })
  return (
    <div>
      {counterList}
      <button onClick={() => dispatch([REMOVE])}>{'Remove'}</button>
      <button onClick={() => dispatch([INSERT])}>{'Add'}</button>
    </div>
  )
}
