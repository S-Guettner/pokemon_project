import {useState, useEffect} from 'react'
import PokemonCards from '../components/PokemonCards.jsx'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    
    const [pokemon,setPokemon] = useState([])
    const [display,setDisplay] = useState (true)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
        .then(res => res.json())
        .then(data => {
            setPokemon(data.results)
            
        })
    },[])
    
if(display){

    return ( 
        <main>
            <button onClick={() => setDisplay(false)}>types</button>
            <h1>Home</h1>
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
else if (!display){
    
    return(
        <div>
            <h1>Hallo</h1>
            <button onClick={() => setDisplay(true)}>X</button>
        </div>

    )
}
 
}
 
export default Home;