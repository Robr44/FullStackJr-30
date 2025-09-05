// rafc -> snippet para crear el componente funcional con flecha

import { useContext, useEffect, useState } from "react"
import { CardCharacter } from "../../components/CardCharacter";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export const ListCharacters = () => {

    //Siempre que necesite una caja paa GUARDAR ALGO voy a hacer un ESTADO
    const [listPjs, setListPjs] = useState([]);

    // Utilizamos el useContext -> Hook para utilizar el contexto previamente creado
    // Sintaxis para cuando tenemos 1 SOLO VALOR EN EL CONTEXTO
    //const valorContext = useContext(FavoritesContext)
    //console.log(valorContext);

    const {favorites, setFavorites} = useContext(FavoritesContext)
    //console.log(favorites);

    // Las funciones adentro de un componente declarenlas con el camelCase
  const peticionApi = () => {
    // Peticion a una API
    fetch('https:///rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Necesito sacar esa data de aca adentro
        setListPjs(data.results);
    }) 
    .catch(error => console.error(error))
  }

  //console.log(listPjs);

/*
   //Async function peticionApiAA
  const peticionApiAA = async () => {
    //Bloqu de manejo de errores
  try{
    //Reemplazo al primer .then
  let response = await fetch('https://rickandmortyapi.com/api/character')
    //console.log(response.json());

    //Reemplazo para el segundo .then
   let data = await response.json();
   console.log(data);
  }catch(error){
    console.error(error)
  }
}
*/


  // useEffect -> Cuando necesito cargar datos apenas se vaya a montar el component

  useEffect( () => {
    peticionApi()

  },[])

  return (
    <div className="row">
        {/* Recorrer el array para mostrar los datos -> Mapear los datos para pintarlos*/}

        {listPjs.map( (personaje) => {
          return <section key={personaje.id} className="col-md-3 col-sm-12" >
            <CardCharacter 
            id={personaje.id}
            name={personaje.name}
            image={personaje.image}
            status={personaje.status}
            listFavorites={favorites}
            changeFavorites={setFavorites}
            />
          </section>
         })}
    </div>
  )
}
