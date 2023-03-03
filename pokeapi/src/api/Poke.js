import axios from 'axios';
import { useState } from 'react';





       export const getPokemons  = async (stat)=> {


            const peticion = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1199').then((resp)=> resp.data.results);
            stat(peticion);
            
       }
       export const getInfo  = async (stat , inf)=>{
        

        




          const info = await axios.get(`https://pokeapi.co/api/v2/move-ailment/1`).then((resp)=>resp.data.moves);
          const peticion = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=15').then((resp)=> resp.data.results);
            
          
          inf(peticion);
          stat(info);
       }


     