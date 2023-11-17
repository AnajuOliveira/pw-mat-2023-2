import React from 'react'
import myfetch from '../utils/myefetch'

export default function CustomerList(){
    const [custumers, setCustumers] = React.useState([])

    React.useEffect(() => {
        fetchData()
    }, [])
    
    async function fetchData(){
        try {
            catch(error){
                console.error(error)
                alert('ERRO' + error.menssage)
            }
        }
    }

    return(
        <>
            <h1> Listagem de clientes </h1>
            <p> {JSON.stringify(custumers)} </p>
        </>
    )
}