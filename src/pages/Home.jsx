import { useEffect,useState } from "react"
import PokemonCards from '../components/PokemonCards.jsx'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    
    const [pokemonFiltered,setPokemonFiltered] = useState([])
    
    
    const [basicData,setBasicData] = useState([])
    const [searchedType,setSearchedType] = useState("grass")
    const [display,setDisplay] = useState(false)
    const [searchedPokemon, setSearchedPokemon] = useState("")
    
    const [searchedDetails,setSearchedDetails] = useState({})
    const [searchedUrl, setSearchedUrl] = useState()
    const [buttonClick, setButtonClick] = useState(false)
    


        useEffect(() => {

        const filteredTypesArr = []
        let arrLength
        /* let searchedType = "water" */
        
        fetch(`https://pokeapi.co/api/v2/type/${searchedType}`)
        .then(res => res.json())
        .then(data => {
            
            /* setFilteredData(data.pokemon) */
            /* console.log(data) */

            data.pokemon.map((item) => {
                filteredTypesArr.push(item.pokemon)
                /* console.log(data.pokemon) */
                
            })
            setPokemonFiltered(filteredTypesArr)
            arrLength = filteredTypesArr.length
            /* console.log(filteredTypesArr) */



            fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
            .then(res => res.json())
            .then(data => {
                setBasicData(data.results)
                /* console.log(basicData) */
            })

  /*           const copy = [...basicData]
            console.log(copy)
            console.log(basicData) */
/*             basicData.map((item) => {
                console.log(item)
            }) */

            fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`)
            .then(res => res.json())
            .then(data => {
                setSearchedDetails(data)
                setSearchedUrl(data.species.url.replace("-species" ,""))
                
                
                console.log(data)
                console.log(data.species.url.replace("-species" ,""))
                console.log(data.id)
                console.log(data.name)
            })
        })
        
        console.log(searchedDetails)
        
        
    },[searchedType,searchedPokemon,buttonClick])
    
if(!display && !buttonClick){
    return ( 

        <main>
            <div className="buttonSearch">
            <input onChange={(e) => setSearchedPokemon(e.target.value) } type="text" placeholder="🔍" name="" id="" className="placeHolder"/>

            <button className="lghitDarkM">☼☽</button>


            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="" />


            <button className="searchButton" onClick={() => setButtonClick(true)}>SEARCH </button>
            </div>
            

<div className="buttonsContainer">
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

</div>

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
}else if(display && !buttonClick) {

    return(
        <main>
           <div className="buttonSearch">
            <input className="placeHolder" onChange={(e) => setSearchedPokemon(e.target.value) } type="text" placeholder="🔍" name="" id="" />

            

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="" />
            <button className="searchButton" onClick={() => setButtonClick(true)}>SEARCH </button>
            </div>
            
            
<div className="buttonsContainer">
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
</div>

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

}else if(buttonClick){
    return(
        <main>
            
            <button onClick={() => {setButtonClick(false)}}>All Pokemon</button>
            {[searchedDetails].map((items,index) => {
                   return(
                           <PokemonCards 
                           key={uuidv4()}
                           name={items.name}
                           url={searchedUrl}
                           id={index + 1}
                           />

                   )
               })}  

        </main>
       
    )
}
}
 
export default Home;