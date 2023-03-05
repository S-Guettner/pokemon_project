import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const PokemonDetails = () => {
    const test = useParams()
    
    const [details,setDetails] = useState("")
    const [name,setName] = useState("")
    const [types, setTypes] = useState([])
    const testArr = []

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${test.id}/`)
        .then(res => res.json())
        .then(data => {
            setDetails(data.sprites.other.dream_world.front_default)
            setName(data.forms[0].name)
            setTypes(data.types)
            testArr.push(data.types[0].type.name)
            testArr.push(data.types[1].type.name)
            console.log(testArr.toString())
        })
    },[])


        types.forEach((items) => {
            testArr.push(items.type.name)
            console.log(testArr)
        })
    


        

    return ( 
        < div className="details--details-">
            <img src={details} alt="" />
           
            <div className="idContainerDetails">
            <h1>#{test.id}</h1>
            <h2>{name}</h2>
            </div>
            <div className="pokemonCards--detailss">
            <p className="type1">{testArr[0]}</p>
            <p className="type2">{testArr[1]}</p>
            </div>
        </div>
         );
}
 
export default PokemonDetails;