import axios from 'axios';





         const getPokemons = async (stat)=> {
            const peticion = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1199').then((resp)=> resp.data.results);
    


          
            

            stat(peticion);
            
         }

    

        export { 

            getPokemons,
          
        }

    



