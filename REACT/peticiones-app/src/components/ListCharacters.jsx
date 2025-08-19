// rafc -> snippet para crear el componente funcional con flecha

import { useEffect, useState } from "react"

export const ListCharacters = () => {

    //Siempre que necesite una caja paa GUARDAR ALGO voy a hacer un ESTADO
    const [listPjs, setListPjs] = useState([]);

    // Las funciones adentro de un componente declarenlas con el camelCase
  const peticionApi = () => {
    // Peticion a una API
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Necesito sacar esa data de aca adentro
        setListPjs(data.results);
    }) 
    .catch(error => console.error(error))
  }
  console.log(listPjs);

  // Async function peticionApiAA
  //const peticionApiAA = async () => {
    //Bloqu de manejo de errores
  //  try{
    //Reemplazo al primer .then
  //  let response = await fetch('https://rickandmortyapi.com/api/character')
    //console.log(response.json());

    //Reemplazo para el segundo .then
   // let data = await response.json();
    ////////  }

  // useEffect -> Cuando necesito cargar datos apenas se vaya a montar el component

  useEffect( () => {
    peticionApi()

  },[])

  return (
    <div>
        ListCharacters
    </div>
  )
}
