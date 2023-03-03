const SingleType = (props) => {
    

    
    return ( 

        <div>
            <button onClick={(e) => {console.log(e.target.value)}} value={props.name}>{props.name}</button>
        </div>
        
     );
}
 
export default SingleType;