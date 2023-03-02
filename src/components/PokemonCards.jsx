import { useState } from "react";
import { Link } from "react-router-dom";

const PokemonCards = (props) => {
    
    const [img,setImg] = useState("")

    fetch(`${props.url}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.sprites.other.dream_world.front_default)
        setImg(data.sprites.other.dream_world.front_default)
    })

    return ( 
        <Link>
        <div className="pokemonCards">
            <img src={img} alt="" />
            <div>
                <p>{props.id}</p>
                <p>{props.name}</p>
            </div>
        </div>
        </Link>
     );
}
 
export default PokemonCards;