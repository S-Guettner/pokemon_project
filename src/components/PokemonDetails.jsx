import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const PokemonDetails = () => {
    const test = useParams()
    
    const [details,setDetails] = useState("")
    const [name,setName] = useState("")

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${test.id}/`)
        .then(res => res.json())
        .then(data => {
            setDetails(data.sprites.other.dream_world.front_default)
            setName(data.forms[0].name)
            console.log(data)
        })
    },[])

    console.log(details)

    return ( 
        <div>
            <img src={details} alt="" />
            <h1>#{test.id}</h1>
            <h2>{name}</h2>
        </div>
         );
}
 
export default PokemonDetails;