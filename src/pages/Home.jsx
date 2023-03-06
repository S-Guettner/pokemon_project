import { useEffect,useState } from "react"
import PokemonCards from '../components/PokemonCards.jsx'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    
    // state of unfiltered list
    const [basicData,setBasicData] = useState([])
    // state of filtered by type list
    const [pokemonFiltered,setPokemonFiltered] = useState([])
    // state of choosen type
    const [searchedType,setSearchedType] = useState("grass")
    // state of conditional render
    const [display,setDisplay] = useState(false)
    // state of search input
    const [searchedPokemon, setSearchedPokemon] = useState("")
    // state of search
    const [searchedDetails,setSearchedDetails] = useState({})
    // state of changed url for search
    const [searchedUrl, setSearchedUrl] = useState()
    // state of search button
    const [buttonClick, setButtonClick] = useState(false)
    

    // toggle
    const [toggle, setToggle] = useState(true)
    let classToggle = toggle? "active" : null;
    let classToggleD = toggle? null : "active";
    let backgroundDark = toggle? null : "dark";
    let cardsDark = toggle? null: "cardsDark";
    let buttonsContainerDark = toggle? null: "buttonsContainerDark";
    let buttonSearchDark = toggle? null: "buttonSearchDark";
    let inputDark = toggle? null: "inputDark";




        // data fetches
        useEffect(() => {

        const filteredTypesArr = []
        let arrLength
        
        // fetch for list filtered by type
        fetch(`https://pokeapi.co/api/v2/type/${searchedType}`)
        .then(res => res.json())
        .then(data => {
            

            data.pokemon.map((item) => {
                filteredTypesArr.push(item.pokemon)

                
            })
            setPokemonFiltered(filteredTypesArr)
            arrLength = filteredTypesArr.length



            // fetch for unfiltered list
            fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
            .then(res => res.json())
            .then(data => {
                setBasicData(data.results)

            })

            // fetch for search result
            fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`)
            .then(res => res.json())
            .then(data => {
                setSearchedDetails(data)
                setSearchedUrl(data.species.url.replace("-species" ,""))
                
            })
        })
        

        
        
    },[searchedType,searchedPokemon,buttonClick])
    
    // renders unfiltered list
if(!display && !buttonClick){
    return ( 

        <main className={` ${backgroundDark}`}>
            <div className={`buttonSearch ${buttonSearchDark}`}>
            <input onChange={(e) => setSearchedPokemon(e.target.value) } type="text" placeholder="🔍" name="" id="" className={`placeHolder ${inputDark}`}/>


            <button onClick={()=> setToggle(!toggle)} className="lghitDarkM"><span className={`sun ${classToggle}`}>☀︎</span> <span className={`moon ${classToggleD}`}>☽</span> </button>


            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="" />


            <button className="searchButton" onClick={() => setButtonClick(true)}>SEARCH </button>
            </div>
            
{/* buttons for state change of type search */}
<div className={`buttonsContainer ${buttonsContainerDark}`}>
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


            {basicData.map((items,index) => {
                    return(
                            <PokemonCards
                            cardsDark={cardsDark}
                            key={uuidv4()}
                            name={items.name}
                            url={items.url}
                            id={index + 1}
                            />

                    )
                })} 

            </main>
     )
     // renders filtered list
}else if(display && !buttonClick) {

    return(
        <main className={` ${backgroundDark}`}>


            <div className={`buttonSearch ${buttonSearchDark}`}>
            <input onChange={(e) => setSearchedPokemon(e.target.value) } type="text" placeholder="🔍" name="" id="" className={`placeHolder ${inputDark}`}/>


            <button onClick={()=> setToggle(!toggle)} className="lghitDarkM"><span className={`sun ${classToggle}`}>☀︎</span> <span className={`moon ${classToggleD}`}>☽</span> </button>


            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="" />


            <button className="searchButton" onClick={() => setButtonClick(true)}>SEARCH </button>
            </div>
            
{/* buttons for state change of type search */}
<div className={`buttonsContainer ${buttonsContainerDark}`}>
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
                    cardsDark={cardsDark}
                    key={uuidv4()}
                    name={items.name}
                    url={items.url}
                    id={index + 1}
                    />
            )
        })}

        </main>


    )
        // renders search result
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