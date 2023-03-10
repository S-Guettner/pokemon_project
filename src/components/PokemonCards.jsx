import { useState } from "react";
import { Link } from "react-router-dom";

const PokemonCards = (props) => {
    
    const [img,setImg] = useState("")
    const [id,setId] = useState("")
    
    fetch(`${props.url}`)
    .then(res => res.json())
    .then(data => {
        setImg(data.sprites.other.dream_world.front_default)
        setId(data.id)
    })

    return ( 
        <Link to={`/details/${id}/${props.cardsDark}`}>
        <div className={`pokemonCards ${props.cardsDark}`}>
            <img src={img} alt="" />
            <div className="pokemonCards--details">
                <p>#{id}</p>
                <p>{props.name}</p>
            </div>
        </div>
        </Link>
     );
}
 
export default PokemonCards;