import { useEffect,useState } from "react"
import PokemonCards from '../components/PokemonCards.jsx'
import { v4 as uuidv4 } from 'uuid';

const Testpage = () => {
    
    const [pokemon,setPokemon] = useState([])
    const typeTestArr = ["grass","poison"]
    const [id,setId] = useState()
    const typeFoundID = []
    const displayLimit = 20

        useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${displayLimit}&offset=0`)
        .then(res => res.json())
        .then(data => {
            setPokemon(data.results)
        })
    },[])
    
    
    const filterFetch = (i) => {useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(res => res.json())
        .then(data => {
            if(typeTestArr[0] === data.types[0].type.name 
                || typeTestArr[0] === data.types[1].type.name 
                || typeTestArr[1] === data.types[0].type.name 
                || typeTestArr[1] === data.types[1].type.name){
/*                     typeFoundID.push(data.id)
                    setId(data.id)
                     */

                    console.log(data.types,data.id)

                }
            })
        },[])
    }
        
        
        for(let i = 1; i <= 10; i++){
            filterFetch((i.toString()))
            console.log(i.toString())
            
        }

    return ( 
                    <main>
                {pokemon.map((items,index) => {
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