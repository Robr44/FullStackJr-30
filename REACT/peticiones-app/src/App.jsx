
import './App.css'

// Asincronismo -> Manejar codigo que tarda en completarse como solicitudes a un servidor o lecturas
// de archivos, sin bloquear el resto del programa
// Promesa -> La esperanza de una posible respuesta a eso que va a tardar

function App() {

  // Las funciones adentro de un componente declarenlas con el camelCase
  const peticionApi = () => {
    // Peticion a una API
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }

  // Async function peticionApiAA
  const peticionApiAA = async () => {
    //Bloqu de manejo de errores
    try{
    //Reemplazo al primer .then
    let response = await fetch('https://thesimpsonsapi.com/api/characters')
    console.log(response.json());

    //Reemplazo para el segundo .then
    let data = await response.json();
    console.log(data);
    }catch(error){
      console.error(error)
    }
  }

  return (
    <>
      <h1>Holitas</h1>
      <button onClick={peticionApi}>Apretame para traer datos</button>
      <button onClick={peticionApiAA}>Apretame para traer datos</button>
    </>
  )
}

export default App
