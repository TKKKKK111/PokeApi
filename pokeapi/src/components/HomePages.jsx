import React,{useEffect, useState} from 'react'
import {  getPokemons } from '../api/Poke';

const HomePage = () => {

    const [pokemons, setPoke] = useState([]);
    const [datos, setDatos] = useState("");

   

          
    

    useEffect(() => {
        getPokemons(setPoke);
    
    }, []);

    return (  
        <>
            <div className='container'>
            <>
              <form role={'search'} className='d-flex'>
                <input className="form-control me-2" focus aria-label='Search' type="search" value={datos} onChange={(e)=>setDatos(e.target.value.toLocaleLowerCase())}/>
                </form>
            </>
                <div className="row">
                    {pokemons.filter((items)=>items.name.toLowerCase().includes(datos))
                    .map((items,index)=>
                    (
                        <div key={index} className="col-sm-3 " style={{marginTop:"15px"}} > 
                            <div className="card"> 
                                <div className="card-img-top shadow-lg p-3 mb-5 bg-body-tertiary rounded"> 
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${items.url.split('/')[6]}.png`} alt='Imagen no encontrada' />
                                </div>
                                <div className="card-title">{items.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomePage;