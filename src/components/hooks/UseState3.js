import React, { useState } from 'react'

const UseState3 = () => {
    const [click, setClicks] = useState(0);
    const [title, setTitle] = useState('')

    const handleInput = (e) => {
        const value = e.target.value
        setTitle(value)
    }
    const addClick = () => {
        setClicks(click + 1)
    }
    return (
        <div>
            <input type="text" onChange={handleInput} />
            <p>{title}</p>
            <button onClick={addClick}> Contador ({click})</button>
        </div>
    )
}

export default UseState3