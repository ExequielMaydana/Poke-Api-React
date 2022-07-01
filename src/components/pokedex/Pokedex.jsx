import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import image from "../../assets/img/pokebienvenida.png";
import ListPokemons from "../search/ListPokemons";
import Paginacion from "./Paginacion";
import PokemonCard from "./PokemonCard";

// pokedex segunda ruta.
const Pokedex = () => {
  // en nameDeRaiz llamamos al nombre que guardamos en el store en la ruta raiz.
  const nameDeRaiz = useSelector((state) => state.nameUser);

  // el input de tipo siempre empoeza en 'All'
  const [typePokemon, setTypePokemon] = useState('All');

  // en pokemons guardamos los pokemones
  const [pokemons, setPokemons] = useState();

  // estado para buscar un pokemon por nombre
  const [searchName, setSearchName] = useState('');
  
  // esto le paso al button del input (buscar por nombre)
  const c = () => {
    if(searchName.length >  0){
      setPokemons([{name:searchName}])
    }else{
      alert('escribe un nombre')
    }
     
  };
  
  // puse la URL aca para hacer la paginacion, con el setUrl cambio la pagina.
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')

  // uso este estado para acceder al next y previous de la paginacion
  const [p, setP] = useState() 


  useEffect(() => {
    // const URL_POKEMONS = `https://pokeapi.co/api/v2/pokemon/?offset=1&limit=100`;
    axios
      .get(url)
      .then((res) => {
        setPokemons(res.data.results)
        setP(res.data)
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <article className="container-pokedex">
      
      <section className="header">
        <div className="red-stripe"></div>
        <div className="black-stripe"></div>
        <div className="header-image">
          <img src={image} alt="" />
          <div className="image-elipse3">
            <div className="image-elipse4"></div>
          </div>
        </div>
      </section>

      <section className="container-card-pokedex">
        <div className="pokedex-title">
          <h2>
            <b>Bienvenido {nameDeRaiz},</b> aqui podras encontrar tu pokemon
            favorito
          </h2>
        </div>

        <div className="pokedex-inputs">
          <div className="inputs-search-name">
            <input
              type='text'
              onChange={(e) => setSearchName(e.target.value)}
              placeholder="Busca un pokemon..."
            />
            <button onClick={c}>Buscar</button>
          </div>
          <ListPokemons className='inputs-search-type'setUrl={setUrl} setTypePokemon={setTypePokemon} typePokemon={typePokemon}/>
        </div>
      </section>
      <section className="container-pagination">
        <Paginacion setUrl={setUrl} p={p}/>
      </section>
      <div className="pokedex-pokemones-container">
        {
            pokemons?.map((pokemon) => (
            <PokemonCard key={pokemon.name} name={pokemon.name} typePokemon={typePokemon}/>

       ))}
      </div>
    </article>
  );
};

export default Pokedex;
