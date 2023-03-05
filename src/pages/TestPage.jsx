import { useEffect,useState } from "react"
import PokemonCards from '../components/PokemonCards.jsx'
import { v4 as uuidv4 } from 'uuid';

const Testpage = () => {
    
    const [pokemonName,setPokemonName] = useState([])
    const [basicData,setBasicData] = useState([])
    const [searchedType,setSearchedType] = useState("")
    const [filteredData, setFilteredData] = useState([])
    const filteredListArr = []
    

        useEffect(() => {


        const filteredTypesArr = []
        let arrLength
        let searchedType = "water"
        
        fetch(`https://pokeapi.co/api/v2/type/${searchedType}`)
        .then(res => res.json())
        .then(data => {
            
            setFilteredData(data.pokemon)
            

            data.pokemon.map((item) => {
                filteredTypesArr.push(item.pokemon)
                /* console.log(data.pokemon) */
                
            })
            setPokemonName(filteredTypesArr)
            arrLength = filteredTypesArr.length
            console.log(filteredTypesArr)



            fetch(`https://pokeapi.co/api/v2/pokemon?limit=${arrLength}&offset=0`)
            .then(res => res.json())
            .then(data => {
                setBasicData(data.results)
                console.log(data.results)
            })
        })

        
        
    },[searchedType])
    
 

/*     filteredData.map((item,index) => {
        console.log(item.pokemon.url)
 


    }) */

    /* console.log(filteredListArr) */
    

    return ( 

        <main>


                {pokemonName.map((items,index) => {
                    return(
                            <PokemonCards 
                            key={uuidv4()}
                            name={items.name}
                            url={items.url}
                            id={index + 1}
                            />
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