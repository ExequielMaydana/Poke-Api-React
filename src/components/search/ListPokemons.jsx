import axios from "axios";
import React, { useEffect, useState } from "react";

const ListPokemons = ({setTypePokemon, typePokemon, setUrl}) => {

  const [typePokemons, setTypePokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypePokemons(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
      <div className="container-types-list">
        <div>
          <p>Busca los pokemones basandote en su tipo!</p>
        </div>
        <button onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon/')}>
            Mostrar todos.
        </button>
        <div className='container-type-name-button'>
        {
          typePokemons.map(type => (
            <div key={type.url} className='button-type'>
            <button onClick={() => setTypePokemon(type.name)}>{type?.name}</button>
          </div>
          ))
        }
        </div>
        <div>{typePokemon.name}</div>
      </div>
  );
};

export default ListPokemons;
