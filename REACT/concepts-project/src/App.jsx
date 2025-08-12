import './App.css'
import Saludo from './components/Saludo'


function App() {

  return (
    <> {/* Primer fragment -> NO DIBUJA UN CONTENEDOR EN EL HTML */}

      <h1>Holaa</h1>

      {/* Primer componente */}
      <Saludo name='Roberto'/>
      <Saludo name='Edenilson'/>
    </>
  )
}

export default App
