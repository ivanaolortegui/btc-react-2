import React, { useState } from 'react'
import ApiContext from './ApiContext'

const { Provider, Consumer } = React.createContext()
const Nieto = () => {
    return (
        <Consumer>
            {(consumer) => (
                <form onSubmit={consumer.submit} >
                    <input name={consumer.name} onChange={consumer.actualizar}/>
                    <button>Enviar</button>
                </form>
            )}
        </Consumer>

    )
}

const Hijo = () => {
    return (
        <Nieto />
    )
}

const ApiContextForm = () => {

    const [nombre, setNombre] = useState('')
    const actualizar = (event) => {
        const value = event.target.value
        setNombre(value)
    }

    const submit = (event) => {
        event.preventDefault()
        console.log(nombre);
    }

    return (
        <Provider value={{ name: 'nombre', actualizar, submit }}>
            <h5>El nombre es {nombre}</h5>
            <Hijo />
        </Provider>

    )
}

export default ApiContextForm;