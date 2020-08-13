import React, { useState } from 'react'

const Input = (props) => {
    const [color, setColor] = useState('blue')

    const actualizar = (event) => {
        const value = event.target.value
        let colorInput = color
        if (value.trim() === '') {
            colorInput = '#282c34'
            console.log('espaci vacio');
        }
        if (value.trim() !== '' && value.length < 5) {
            colorInput = 'red'
            console.log('menor de 5');
        }
        setColor(colorInput)
        props.onChange(props.name, value)
    }

    const styles = {
        border: `1px solid ${color}`,
        padding: "0.3em 0.6em",
        outline: "none",
    };
    return (
        <>
            <input style= {styles} name={props.name} placeholder={props.placeholder} onChange={actualizar} />
        </>
    )
}

const Form = () => {

    const [formState, setForm] = useState({
        nombre: '',
        precio: ''
    })

    const { nombre, precio } = formState

    const actualizar = (inputName, text) => {
        setForm({
            ...formState,
            [inputName]: text
        })
    }

    const submit = (e) => {
        e.preventDefault()
        console.log({ nombre, precio });
    }
    return (
        <form onSubmit={submit}>
            <Input name="nombre" placeholder="Nombre de la fruta" onChange={actualizar} />
            <Input name="precio" placeholder="Precio" onChange={actualizar} />
            <button>Enviar</button>
        </form>
    )
}

export default Form 