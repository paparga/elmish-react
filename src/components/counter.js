import React from 'react'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export function update(actions, model){
  let action = actions.shift()
  switch (action) {
    case INCREMENT:
      return model + 1
    case DECREMENT:
      return model - 1
    default:
      return model
  }
}

export function view({dispatch, model}){

  const style = { fontSize: '20px',
                  fontFamily: 'monospace',
                  display: 'inline-block',
                  width: '50px',
                  textAlign: 'center'
                }

  return (
    <div>
      <button onClick={() => dispatch([INCREMENT])}>{'+'}</button>
      <div style={style} >{model}</div>
      <button onClick={() => dispatch([DECREMENT])}>{'-'}</button>
    </div>
  )
}

export function viewWithRemove({context, model}){

  const style = { fontSize: '20px',
                  fontFamily: 'monospace',
                  display: 'inline-block',
                  width: '50px',
                  textAlign: 'center'
                }

  return (
    <div>
      <button onClick={() => context.actions([INCREMENT])}>{'+'}</button>
      <div style={style} >{model}</div>
      <button onClick={() => context.actions([DECREMENT])}>{'-'}</button>
      <div style={style} ></div>
      <button onClick={() => context.remove([])}>{'x'}</button>
    </div>
  )
}
