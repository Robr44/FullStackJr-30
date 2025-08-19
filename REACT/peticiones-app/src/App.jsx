
import './App.css'
import { ListCharacters } from './components/ListCharacters'

// Asincronismo -> Manejar codigo que tarda en completarse como solicitudes a un servidor o lecturas
// de archivos, sin bloquear el resto del programa
// Promesa -> La esperanza de una posible respuesta a eso que va a tardar

function App() {

  return (
    <>
      <h1>Holitas</h1>
      <ListCharacters/>
    </>
  )
}

export default App
