import React, { useEffect, useState } from 'react';

const CicloDeVida = () => {
    const [users, setUsers] = useState([]);
    const [emoji, setEmoji] = useState('🍎')

    useEffect(()=>{
        console.log('solicitud a la api');
        fetch('http://jsonplaceholder.typicode.com/users/')
        .then((resp)=> resp.json())
        .then((users)=>  setUsers(users))
    },[emoji])

    useEffect(()=>{

       const setTimeoutId =  setTimeout(()=>{
            console.log('Soy un setTimeout');
        },3000)

        return()=>{
            //Desmontado
            clearTimeout(setTimeoutId)
            console.log('componente desmontado');
        } 
    },[])

    const cambiarEmoji = () => {
        const nextEmoji = emoji === '🍎' ? '🍏' : '🍎'
        setEmoji(nextEmoji)
    }
    return(
        <div>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}> {user.name} </li>
                ))}
            </ul>
                <div>{emoji}</div>
                <button onClick={cambiarEmoji}>Cambiar Emoji</button>
        </div>
    )
}

const Desmontado = () => {
    const [mostar, setMostrar] = useState(true);

    const desmontar = () => {
        setMostrar(false)
    }

    return(
        <div>
            <button onClick={desmontar}>desmontar</button>
            {mostar && <CicloDeVida/>}
        </div>
    )
}

export default Desmontado;