import React,{useEffect, useState} from 'react';
import {  getPokemons } from '../api/Poke';

const HomePage = () => {

  const [pokemons, setPoke] = useState([]);
  const [datos, setDatos] = useState("");
  const [abilities, setAbilities] = useState({});

  useEffect(() => {
    getPokemons(setPoke);
  }, []);

  useEffect(() => {
    async function fetchPokemonAbilities(pokemon) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();
      setAbilities((prevAbilities) => ({
        ...prevAbilities,
        [pokemon]: data.abilities.map(({ ability }) => ability.name),
      }));
    }

    pokemons.forEach((pokemon) => {
      fetchPokemonAbilities(pokemon.name);
    });
  }, [pokemons]);

  return (
    <>
      <br />
      <div className="container ">
        <>
          <form role={"search"} className="d-flex">
            <input
              className="form-control me-2"
              aria-label="Search"
              placeholder="Search a Pokemon"
              type="search"
              onChange={(e) => setDatos(e.target.value.toLocaleLowerCase())}
            />
          </form>
        </>
        <div className="row">
          {pokemons
            .filter((pokemon) => pokemon.name.toLowerCase().includes(datos))
            .map((pokemon, index) => (
              <div
                key={index}
                className="col-sm-3 "
                style={{ marginTop: "15px", height:"350px" }}
              >
                <div className="card text-center bg-dark">
                  <div className="card-img shadow-lg rounded ">
                    <img
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[
                        6
                      ]}.png`}
                      alt="Imagen no encontrada"
                    />
                  </div>
                  <div className="card-body text-bg-light rounded" id="card">
                    <div className="card-title">
                      {pokemon.name.toUpperCase()}
                      {abilities[pokemon.name] && (
                
                        <ul>
                         <hr></hr>
                           Abilities
                           <br/>

                          {abilities[pokemon.name].map((ability, index) => (
                            <li key={index}>{ability}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
