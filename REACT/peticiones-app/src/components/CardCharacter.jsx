export const CardCharacter = ({name, image, status}) => {
    return (
        <div>
        <div className="card" style={{height: '28rem'}}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{status}</p>
                    <button className="btn btn-primary">Add to Favorites</button>
                </div>
            </div>
        </div>
    )
}