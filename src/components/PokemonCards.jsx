import { useState } from "react";
import { Link } from "react-router-dom";

const PokemonCards = (props) => {
    
    const [img,setImg] = useState("")
    const [id,setId] = useState("")
    
    fetch(`${props.url}`)
    .then(res => res.json())
    .then(data => {
        setImg(data.sprites.other.dream_world.front_default)
        console.log(data.id)
        setId(data.id)
    })

    return ( 
        <Link to={`/details/${props.id}`}>
        <div className="pokemonCards">
            <img src={img} alt="" />
            <div>
                <p>{id}</p>
                <p>{props.name}</p>
            </div>
        </div>
        </Link>
     );
}
 
export default PokemonCards;