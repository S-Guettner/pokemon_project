import { useEffect,useState } from "react"
import PokemonCards from '../components/PokemonCards.jsx'
import { v4 as uuidv4 } from 'uuid';

const Testpage = () => {
    
    const [pokemonName,setPokemonName] = useState([])
    const [basicData,setBasicData] = useState([])
    const [searchedType,setSearchedType] = useState("")

    

        useEffect(() => {


        const filteredTypesArr = []
        let arrLength
        /* let searchedType = "grass" */
        
        fetch(`https://pokeapi.co/api/v2/type/${searchedType}`)
        .then(res => res.json())
        .then(data => {
            
            data.pokemon.map((item) => {
                filteredTypesArr.push(item.pokemon.name)
                
            })
            setPokemonName(filteredTypesArr)
            arrLength = filteredTypesArr.length



            fetch(`https://pokeapi.co/api/v2/pokemon?limit=${arrLength}&offset=0`)
            .then(res => res.json())
            .then(data => {
/*                 console.log(data.results) */
                setBasicData(data.results)
            })
        })

        
    },[searchedType])
    
    pokemonName.map((item) => {
        console.log(item)


    })

    
    

    return ( 

        <main>
                        <button onClick={() => setSearchedType("bug")}>Bug</button>
                        <button onClick={() => setSearchedType("dark")}>Dark</button>
                        <button onClick={() => setSearchedType("dragon")}>Dragon</button>
                        <button onClick={() => setSearchedType("electric")}>Electric</button>
                        <button onClick={() => setSearchedType("fairy")}>Fairy</button>
                        <button onClick={() => setSearchedType("fighting")}>Fighting</button>
                        <button onClick={() => setSearchedType("fire")}>Fire</button>
                        <button onClick={() => setSearchedType("flying")}>Flying</button>
                        <button onClick={() => setSearchedType("ghost")}>Ghost</button>
                        <button onClick={() => setSearchedType("grass")}>Grass</button>
                        <button onClick={() => setSearchedType("ground")}>Ground</button>
                        <button onClick={() => setSearchedType("ice")}>Ice</button>
                        <button onClick={() => setSearchedType("normal")}>Normal</button>
                        <button onClick={() => setSearchedType("plant")}>Plant</button>
                        <button onClick={() => setSearchedType("poison")}>Poison</button>
                        <button onClick={() => setSearchedType("psychic")}>Psychic</button>
                        <button onClick={() => setSearchedType("rock")}>Rock</button>
                        <button onClick={() => setSearchedType("steel")}>Steel</button>
                        <button onClick={() => setSearchedType("water")}>Water</button>


                    {pokemonName.map((item) => {
                        return(
                        <div>
                            <p>{item}</p>
                        </div>
                        
                        )
                    
                    })}


{/*                 {basicData.map((items,index) => {
                    return(
                            <PokemonCards 
                            key={uuidv4()}
                            name={items.name}
                            url={items.url}
                            id={index + 1}
                            />
                    )
                })} */}
            </main>
     );
}
 
export default Testpage;