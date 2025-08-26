export const CardCharacter = ({id, name, image, status, listaFavorites, changeFavorites}) => {
    /* Parte logica para poder utilizar la lista de favoritos */
    const handledAddFavorites = () => {
        // Logica para guardar en favoritos
        console.log(name);

        changeFavorites({id, name, image, status})
        console.log(listaFavorites);
    }
    return (
        <div>
        <div className="card" style={{height: '28rem'}}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{status}</p>
                    <button className="btn btn-primary" onClick={handledAddFavorites}>Add to Favorites</button>
                </div>
            </div>
        </div>
    )
}