import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Exercicio01 from './exercicios/01'

function App() {

  return (
    <>
      <h1> Exercício de React Hooks </h1>

      <BrowserRouter>
        <ul style={{listStyleType: 'nome' /* Lista sem marcadores */}}>
          <li> <Link to = "/"> Página Inicial </Link> </li>
          <li> <Link to = "/01"> Exercício 01 </Link> </li>
        </ul>

        <hr />

        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/01' element = {<Exercicio01 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
