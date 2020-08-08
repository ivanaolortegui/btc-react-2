import React, { useState } from 'react'

const InputHijo = (props) => {
    const actualizar = (event) => {
        const inputText = event.target.value
        props.onChange(props.name, inputText)
    }

    return (
        <div>
            <input type="text" name={props.name}
                placeholder={props.placeholder} onChange={actualizar} />

        </div>
    )
}

const InputCpntrolado2 = () => {
    const [formState, setForm] = useState({
        name: '',
        email: ''
    })
    const actualizar = (inputName, text) => {
        setForm({
            ...formState,
            [inputName]: text
        })
    }
    const { name, email } = formState;
    return (
        <div>
            <h4>Input No Controla propagación de datos</h4>
            <InputHijo name="name" placeholder="Nombre" onChange={actualizar} />
            <InputHijo name="email" placeholder="Email" onChange={actualizar} />
            <h5>{name}</h5>
            <h5>{email}</h5>
        </div>
    )
}

export default InputCpntrolado2