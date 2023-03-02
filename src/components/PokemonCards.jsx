const PokemonCards = (props) => {
    return ( 
        <div className="pokemonCards">
            <img src="" alt="" />
            <div>
                <p>{props.id}</p>
                <p>{props.name}</p>
            </div>
        </div>
     );
}
 
export default PokemonCards;