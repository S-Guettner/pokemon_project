import { useEffect,useState } from "react"
import PokemonCards from '../components/PokemonCards.jsx'
import { v4 as uuidv4 } from 'uuid';

const Testpage = () => {
    
    const [pokemonName,setPokemonName] = useState([])
/*     const [url,setUrl] = useState("")
    const [type,setType] = useState("") */
    const urlArr = []
    const typesArr = []
    const filteredTypesArr =[]
    
    
    const typeTestArr = ["poison","grass"]
    const [id,setId] = useState()
    const typeFoundID = []
    const displayLimit = 20

        useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/grass`)
        .then(res => res.json())
        .then(data => {
            /* setPokemonName(data.results) */
            console.log(data.pokemon)
            data.pokemon.map((item) => {
                console.log(item.pokemon.name)
            })
            
        })
    },[])


    
    

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
            </main>
     );
}
 
export default Testpage;