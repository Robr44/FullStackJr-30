import './App.css'
import Saludo from './components/Saludo.jsx'

function App() {


  return (
    <>{ /* este es el fragment-> no dibuja un contenedor en el html */}
      <h1>Holiwis</h1>
      { /* este es el primer componente */}
      <Saludo nombre='Roberto' apellido='Mangandi' />
      <Saludo nombre='Edenilson' apellido='Escobar' />

    </>
  )
}

export default App