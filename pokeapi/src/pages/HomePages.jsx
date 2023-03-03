import React,{useEffect, useState} from 'react'
import { getInfo, getPokemons } from '../api/Poke';


const HomePage = () => {

    const [pokemons, setPoke] = useState([]);
    const [datos, setDatos] = useState("");
    const [inf, setInf]=useState([]);
  
   

          
    

    useEffect(() => {
        getInfo(setInf,setDatos);
        getPokemons(setPoke);
     
    }, []);
    

    return (  
        <>
        <br/>
            <div className='container '>
            <>
              <form role={'search'} className='d-flex'>
                <input className="form-control me-2"  aria-label='Search' placeholder="Search a Pokemon"type="search" value={datos} onChange={(e)=>setDatos(e.target.value.toLocaleLowerCase())}/>
                </form>
            </>
                <div className="row">
                    {pokemons.filter((items)=>items.name.toLowerCase().includes(datos))
                    .map((items,index)=>
                    (
                        <div key={index} className="col-sm-3 " style={{marginTop:"15px"}} > 
                            <div className="card text-center bg-dark"> 
                                <div className="card-img shadow-lg rounded "> 
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${items.url.split('/')[6]}.png`} alt='Imagen no encontrada' />
                                </div>
                                <div className="card-body text-bg-light rounded" id='card'>
                                    <div className="card-title">
                                        
                                        {items.name}
                                       
                                    {/* VER SI CONVIENE PONER LAS HABILIDADE ACÁ o en el otro page. */}
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default HomePage;