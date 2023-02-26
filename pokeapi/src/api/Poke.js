import axios from 'axios';





         const getPokemons = async (stat)=> {
            const peticion = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500').then((resp)=> resp.data.results);


          
            

            stat(peticion);
            
         }

         const getImg = 
            async (img)=>{

                const img2 = await axios.get('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/');


                const imgURL = img2+{id}+".png"
                img(imgURL)
            }

        export { 

            getPokemons,
            getImg
        }

    



