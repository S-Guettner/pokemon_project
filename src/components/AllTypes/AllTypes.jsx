import { useEffect,useState } from "react";
import SingleType from "../SingleType.jsx";
import { v4 as uuidv4 } from 'uuid';

const Alltypes = () => {
    
    const [types,setTypes] = useState([])
    const array = []

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/`)
        .then(res => res.json())
        .then(data => {
            
            setTypes(data.results)
            
        })
    },[])
    
    types.map((item) => {
        
        array.push(item.name)
        
    })

    return ( 
        <div>
            <h1>alltypes</h1>
            {array.map((item) => {
                return(
                    <SingleType 
                    key={uuidv4()}
                    name={item}
                    />
                )
            })}
        </div>

     );
}
 
export default Alltypes;