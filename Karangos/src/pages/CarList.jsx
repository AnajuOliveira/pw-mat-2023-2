import React from 'react'
import myfetch from '../utils/myefetch'

export default function CarList() {
    const [car, setCar] = React.useState([])

    React.useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            catch (error) {
                console.error(error)
                alert('ERRO' + error.menssage)
            }
        }
    }

    return (
        <>
            <h1> Listagem de Carros </h1>
            <p> {JSON.stringify(car)} </p>
        </>
    )
}