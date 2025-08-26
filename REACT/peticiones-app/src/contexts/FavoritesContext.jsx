/* Vamos a declarar 2 cosas a la vez */
import { createContext, useState } from 'react';

// Crear el contexto
export const FavoritesContext = createContext();

// Proveedor de la informacion del contexto
// Weaper -> Contiene otros componentes -> {children}
export const FavoritesDataProvider = ({children}) => {

    // crear el estado de los favoritos
    const [favorites, setFavorites] = useState([]);
    return(
        <FavoritesContext.Provider value={{favorites, setFavorites}} >
            {children}
        </FavoritesContext.Provider>
    )
}