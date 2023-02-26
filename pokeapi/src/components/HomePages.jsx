import React,{useEffect, useState} from 'react'
import { getPokemons } from '../api/Poke';




const HomePage = () => {

    const pokemones = {
        nombre: name
    }

const [pokemons, setPoke] = useState([]);



useEffect(() => {
    getPokemons(setPoke);
    
}, []);


    return (  
        <>
        
            {pokemons.map((items,index)=>(<div key={index}
            
            
            
            className="row"> 
            
            <div className='col-5'>
                
                
                 <div className="card"> 

                 <div className="card-img-top"> {}</div>
                 
                <div className="card-title">{items.name}</div>

                

                 
                 </div>
                 
                 
                 
                 
        
         </div></div>))}
        
        </>


    );
}
 
export default HomePage;