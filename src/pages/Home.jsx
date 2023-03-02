import {useState, useEffect} from 'react'
import PokemonCards from '../components/PokemonCards.jsx'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    
    const [pokemon,setPokemon] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
        .then(res => res.json())
        .then(data => {
            setPokemon(data.results)
            
        })
    },[])
    
    if(pokemon.length > 0){
        console.log(pokemon)
    }

    return ( 
        <main>
            <h1>Home</h1>
                {pokemon.map((items,index) => {
                return(

                    <PokemonCards 
                    key={uuidv4()}
                    name={items.name} 
                    id={index + 1}
                    />

                )
            })}
           
        </main>
     );
}
 
export default Home;