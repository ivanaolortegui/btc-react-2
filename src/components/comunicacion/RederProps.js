import React, { useState } from 'react';


const Hijo = ({render}) => {

    const modificar = () => {
        //  Pasarle el valor de un string como argumento a render
        render('Se ha actualizado el estado')
    }

    return (
        <>
            <button onClick={modificar}> Click</button>
        </>
    )
}

const Padre = () => {
    const [texto, setTexto] = useState('')
    const actualizar = (text) => {
        // Actualizar el estado de texto con el parámetro text
        setTexto(text)
    }
    return (
        <div>
            <p>{texto}</p>
            <Hijo render={actualizar} />
        </div>
    )
}

export default Padre;