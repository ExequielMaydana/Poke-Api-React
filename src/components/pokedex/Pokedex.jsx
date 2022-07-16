import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import ListPokemons from "../search/ListPokemons";
import Header from "./Header";
import Paginacion from "./Paginacion";
import PokemonCard from "./PokemonCard";
import "./style/stylePokedex.css";

// pokedex segunda ruta.
const Pokedex = () => {
  // en nameDeRaiz llamamos al nombre que guardamos en el store en la ruta raiz.
  const nameDeRaiz = useSelector((state) => state.nameUser);

  // el input de tipo siempre empoeza en 'All'
  const [typePokemon, setTypePokemon] = useState("All");

  // en pokemons guardamos los pokemones
  const [pokemons, setPokemons] = useState();

  const [filterPokemons, setFilterPokemons] = useState(0)

  // PAGINACION 
  const [pagina, setPagina] = useState(1)

  // este es el estado del input, donde se muestra en que pagina estamos parados y para buscar una pagina.
  const [idPagina, setIdPagina] = useState(1)

  // por pagina van a ver 10 pokemons
  const porPagina = 10

  const maximo = pokemons?.length / porPagina

  // estado para buscar un pokemon por nombre
  const [searchName, setSearchName] = useState("");

  // esto le paso al button del input (buscar por nombre)
  const c = () => {
    if (searchName.length > 0) {
      setPokemons([{ name: searchName.toLowerCase() }]);
    }
  };

  // puse la URL aca para hacer la paginacion, con el setUrl cambio la pagina.
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1154"
  );

  useEffect(() => {
  //  const URL_POKEMONS = `https://pokeapi.co/api/v2/pokemon/?offset=1&limit=100`;
    axios
      .get(url)
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <article className="container-pokedex">
      <Header setUrl={setUrl}  setTypePokemon={setTypePokemon} setIdPagina={setIdPagina}/>
      <section className="container-inputs-pokedex">
        <div className="pokedex-title">
          <h2>
            <b>Welcome {nameDeRaiz},</b> here you will find your favorite pokemon.
          </h2>
        </div>

        <div className="pokedex-inputs">
          <div className="inputs-search-name">
            <input
              type="text"
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="Search for a pokemon..."
            />
            <button onClick={c}>Search</button>
          </div>
          <ListPokemons setTypePokemon={setTypePokemon} filterPokemons={filterPokemons} setPagina={setPagina} setIdPagina={setIdPagina}/>
        </div>
      </section>

      <Paginacion 
      pagina={pagina} 
      setPagina={setPagina} 
      maximo={maximo}
      idPagina={idPagina}
      setIdPagina={setIdPagina}
      /> 

      <section className="pokedex-pokemones-container">
        {pokemons?.slice((pagina - 1) * porPagina,(pagina - 1) * porPagina + porPagina)
        .map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            typePokemon={typePokemon}
            setFilterPokemons={setFilterPokemons}
      
          />
        ))}
      </section>
    </article>
  );
};

export default Pokedex;
