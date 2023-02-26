import React,{useEffect, useState} from 'react'
import {  getPokemons } from '../api/Poke';




const HomePage = () => {




const [pokemons, setPoke] = useState([]);





useEffect(() => {
    getPokemons(setPoke);

    
}, []);




    return (  
        <>
        
            {pokemons.map((items,index)=>
            (
             
            
            
            
            <div key={index}
            
            
            
            className="container-fluid"> 
            <div className="row ">
            <div className='col-md-3'>
                 <div className="card"> 

                 <div className="card-img-top shadow-lg p-3 mb-5 bg-body-tertiary rounded"> 
                 <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${items.url.split('/')[6]}.png`} 
                 alt='Imagen no encontrada' /> </div>
                 
                <div className="card-title">{items.name}</div>
                </div>
                 
            </div>
                 
                 
                 </div></div>))}
        
        </>


    );
}
 
export default HomePage;