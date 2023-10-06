import * as React from 'react'

function Greeting({initialName}) {
  // 💣 exclua esta declaração de variável e troque por uma chamada a React.useState

  //Dentro dos parênteses do useState() colocamos o valor inicial
  const [name, setName] = React.useState(initialName)

  function handleChange(event) {
    // 🐨 atualize o nome aqui baseado em event.target.value
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Nome: </label>
        {/* Componete que tem tanto onChange quanto seu value ligados a variável de estado, é chamado
            componente controlado */}
        <input onChange={handleChange} id="name" value={name} />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio01() {
  //return Greeting({initialName: "Turíbio"})

  return <Greeting initialName={"Turíbio"}/>
}

export default Exercicio01