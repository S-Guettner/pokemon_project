
export const arr = []


const SingleType = (props) => {
    

    
    

   
    
    return ( 

        <div>
            <button onClick={(e) => {arr.push(e.target.value)
            console.log(arr.join(" "))
            
            }} value={props.name}>{props.name}</button>
            
            {/* {<option value={props.name}>{props.name}</option>} */}

            
            {/* <button value={props.name} onClick={(e) => setInput(e.target.value)}></button> */}
        </div>
        
     );
}



export default SingleType;