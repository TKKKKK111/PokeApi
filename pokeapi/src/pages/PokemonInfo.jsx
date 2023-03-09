import React, { useState,useEffect } from 'react'
import { getInfo } from '../api/Poke';



const PokemonInfo = () => {
  const [info,setInfo] = useState([]);
  const [data,setData] = useState([]);



    useEffect(() => {
        getInfo(setInfo,setData);

    }, []);

    return (  
        <>
        {data.map((item,index)=><li key={index}> 
                    {item.name}
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png`} alt='Imagen no encontrada' />
                    {info.map((item)=><div key={index} > {item.name}</div>)}
   
   
                </li>)}
        
        </>


    );
}
 
export default PokemonInfo;