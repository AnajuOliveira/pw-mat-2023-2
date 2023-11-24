import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Imagem from '../assets/vintage-cars.png'

export default function Homepage() {

  {/* variavel para controle de quando mostrar a img */ }
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
  }

  return (
    <>
      <h1>Bem-vindo(a) à loja Karangos!</h1>
      <p>Karangos é um projeto front-end desenvolvido pelo Prof. Fausto Cintra juntamente com a turma do 4º semestre matutino de ADS da Fatec Franca.</p>
      <p>Seu objetivo é demonstrar as funcionalidades e possibilidades do React em conjunto com a biblioteca de componentes Material UI, acessando uma API REST remota.</p>
      <p>Clique sobre ícone do menu no canto superior esquerdo para acessar as funcionalidades.</p>
      <p>Use o menu na parte superior à esquerda para acessar as funcionalidades do sistema.</p>
      <p style={{ textAlign: 'center' }}>
        <Button color="secondary" variant="contained">
          Surpresa!
        </Button>
      </p>

      {/* importa imagem */}
      <img src={Imagem} alt="Imagem de carros" style={{ height: visible ? '591px' : '0', opacity: visible ? '1' : '0' }} />

      {/* Botão: quando for clicado de mostrar a imagem */}
      <Button onClick={toggleSwitch}>
        source={isEnabled ?  false : true }
      </Button>

    </>
  )
}