import { useEffect,useState } from "react"
import PokemonCards from '../components/PokemonCards.jsx'
import { v4 as uuidv4 } from 'uuid';

const Testpage = () => {
    
    const [pokemonFiltered,setPokemonFiltered] = useState([])
    
    
    const [basicData,setBasicData] = useState([])
    const [searchedType,setSearchedType] = useState("grass")
    const [filteredData, setFilteredData] = useState([])
    const filteredListArr = []
    const [display,setDisplay] = useState(false)
    

        useEffect(() => {


        const filteredTypesArr = []
        let arrLength
        /* let searchedType = "water" */
        
        fetch(`https://pokeapi.co/api/v2/type/${searchedType}`)
        .then(res => res.json())
        .then(data => {
            
            setFilteredData(data.pokemon)
            /* console.log(data) */

            data.pokemon.map((item) => {
                filteredTypesArr.push(item.pokemon)
                /* console.log(data.pokemon) */
                
            })
            setPokemonFiltered(filteredTypesArr)
            arrLength = filteredTypesArr.length
            /* console.log(filteredTypesArr) */



            fetch(`https://pokeapi.co/api/v2/pokemon?limit=${arrLength}&offset=0`)
            .then(res => res.json())
            .then(data => {
                setBasicData(data.results)
                /* console.log(data.results) */
            })
        })

        
        
    },[searchedType])
    
if(!display){
    return ( 

        <main>

<button onClick={() => {setSearchedType("bug") , setDisplay(true)}}>Bug</button>
<button onClick={() => {setSearchedType("dark"), setDisplay(true)}}>Dark</button>
<button onClick={() => {setSearchedType("dragon") ,setDisplay(true)}}>Dragon</button>
<button onClick={() => {setSearchedType("electric"), setDisplay(true)}}>Electric</button>
<button onClick={() => {setSearchedType("fairy") ,setDisplay(true)}}>Fairy</button>
<button onClick={() => {setSearchedType("fighting") ,setDisplay(true)}}>Fighting</button>
<button onClick={() => {setSearchedType("fire"), setDisplay(true)}}>Fire</button>
<button onClick={() => {setSearchedType("flying"), setDisplay(true)}}>Flying</button>
<button onClick={() => {setSearchedType("ghost"), setDisplay(true)}}>Ghost</button>
<button onClick={() => {setSearchedType("grass") ,setDisplay(true)}}>Grass</button>
<button onClick={() => {setSearchedType("ground"), setDisplay(true)}}>Ground</button>
<button onClick={() => {setSearchedType("ice"), setDisplay(true)}}>Ice</button>
<button onClick={() => {setSearchedType("normal") ,setDisplay(true)}}>Normal</button>
<button onClick={() => {setSearchedType("plant"), setDisplay(true)}}>Plant</button>
<button onClick={() => {setSearchedType("poison") ,setDisplay(true)}}>Poison</button>
<button onClick={() => {setSearchedType("psychic") ,setDisplay(true)}}>Psychic</button>
<button onClick={() => {setSearchedType("rock"), setDisplay(true)}}>Rock</button>
<button onClick={() => {setSearchedType("steel"), setDisplay(true)}}>Steel</button>
<button onClick={() => {setSearchedType("water") ,setDisplay(true)}}>Water</button>
                {/* =========== pokemonFiltered ===========> gibt gefilterte Liste zurück
                    =========== basicData       ===========> gibt ungefilterte Liste zurück
                */}
{/*                 {pokemonFiltered.map((items,index) => {
                    return(
                            <PokemonCards 
                            key={uuidv4()}
                            name={items.name}
                            url={items.url}
                            id={index + 1}
                            />
                    )
                })} */}
            {basicData.map((items,index) => {
                    return(
                            <PokemonCards 
                            key={uuidv4()}
                            name={items.name}
                            url={items.url}
                            id={index + 1}
                            />

                    )
                })} 
            </main>
     )
}else {

    return(
        <main>
<button onClick={() => {setSearchedType("bug") , setDisplay(true)}}>Bug</button>
<button onClick={() => {setSearchedType("dark"), setDisplay(true)}}>Dark</button>
<button onClick={() => {setSearchedType("dragon") ,setDisplay(true)}}>Dragon</button>
<button onClick={() => {setSearchedType("electric"), setDisplay(true)}}>Electric</button>
<button onClick={() => {setSearchedType("fairy") ,setDisplay(true)}}>Fairy</button>
<button onClick={() => {setSearchedType("fighting") ,setDisplay(true)}}>Fighting</button>
<button onClick={() => {setSearchedType("fire"), setDisplay(true)}}>Fire</button>
<button onClick={() => {setSearchedType("flying"), setDisplay(true)}}>Flying</button>
<button onClick={() => {setSearchedType("ghost"), setDisplay(true)}}>Ghost</button>
<button onClick={() => {setSearchedType("grass") ,setDisplay(true)}}>Grass</button>
<button onClick={() => {setSearchedType("ground"), setDisplay(true)}}>Ground</button>
<button onClick={() => {setSearchedType("ice"), setDisplay(true)}}>Ice</button>
<button onClick={() => {setSearchedType("normal") ,setDisplay(true)}}>Normal</button>
<button onClick={() => {setSearchedType("plant"), setDisplay(true)}}>Plant</button>
<button onClick={() => {setSearchedType("poison") ,setDisplay(true)}}>Poison</button>
<button onClick={() => {setSearchedType("psychic") ,setDisplay(true)}}>Psychic</button>
<button onClick={() => {setSearchedType("rock"), setDisplay(true)}}>Rock</button>
<button onClick={() => {setSearchedType("steel"), setDisplay(true)}}>Steel</button>
<button onClick={() => {setSearchedType("water") ,setDisplay(true)}}>Water</button>


<button onClick={() => {setDisplay(false)}}>All Pokemon</button>
            
            {pokemonFiltered.map((items,index) => {
            return(
                    <PokemonCards 
                    key={uuidv4()}
                    name={items.name}
                    url={items.url}
                    id={index + 1}
                    />
                    /* ============  wrong  index of filtered list */
            )
        })}

        </main>


    )

}
}
 
export default Testpage;