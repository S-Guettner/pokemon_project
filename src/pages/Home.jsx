import {useState, useEffect} from 'react'
import PokemonCards from '../components/PokemonCards.jsx'

const Home = () => {
    
    const [pokemon,setPokemon] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
        .then(res => res.json())
        .then(data => {
            setPokemon(data.results)
        })
    },[])
    

    return ( 
        <main>
            <h1>Home</h1>

            {pokemon.map((items) => {
                <PokemonCards 
                name={items.name}
                />
            })}
        </main>
     );
}
 
export default Home;