import axios from 'axios';


       export const getPokemons = async (stat)=> {
            const peticion = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1199').then((resp)=> resp.data.results);
            stat(peticion);
            
       }
       export const getInfo = async (stat)=>{
          const info = await axios.get(`https://pokeapi.co/api/v2/pokemon/${stat}'`).then((resp)=>resp.data);
          return info;
       }


