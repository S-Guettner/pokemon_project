import PokemonDetails from "../components/PokemonDetails";
import { Link } from "react-router-dom";

const Details = () => {
    
    
    return ( 
        <main>
    

           <div className="">
            <Link to="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/269px-International_Pok%C3%A9mon_logo.svg.png?20150121202211" alt="" />
            </Link>
           </div>
        
        
           <div className="pokemonCardsDetails">
            {/* <img src={img} alt="" /> */}
            <div >

            <PokemonDetails 
            
            
            />
            </div>
        </div>
        </main>

     );
}
 
export default Details;