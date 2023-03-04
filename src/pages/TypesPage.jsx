import { useEffect,useState } from "react";

import { v4 as uuidv4 } from 'uuid';

const TypesPage = () => {
    
    const [types,setTypes] = useState([])
    const array = []
    const typeArr = []

    const [stateArr, setStateArr] = useState([])

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


  function saveValue(value) {
    setStateArr( (prevValori)  => [...prevValori, value])
  }
  console.log(stateArr)

    return ( 
        <div>
            <h1>alltypes</h1>
            <div>
            {array.map((item) => {
                return(
                        <div>

                            <button onClick={(e) => {
                                saveValue(e.target.value)
                                

                                }} value={item} key={uuidv4()}>{item}</button>
    
                                    
                        </div>    
                        )
            })}
            <p>{stateArr}</p>
            </div>
        </div>

     );
}
 
export default TypesPage;