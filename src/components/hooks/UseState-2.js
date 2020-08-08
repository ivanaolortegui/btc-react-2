import React, { useState } from 'react';

const UseState2 = () => {

  const [state, setState] = useState({
    clicks: 0,
    title: ''
  })

  const merge = (nextState) => {
    setState({
      ...state,
      ...nextState
    })
  }

  const handleInput = (e) => {
    const valor = e.target.value
    merge({ title: valor })
  }
  const addClicks = () => {
    merge({ clicks: state.clicks + 1 })
  }
  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
      />
      <button onClick={addClicks}> Contador ({state.clicks})</button>
    </div>
  )
}

export default UseState2