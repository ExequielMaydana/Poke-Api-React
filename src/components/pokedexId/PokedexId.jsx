import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Movements from "./Movements";
import StatsPokemon from "./StatsPokemon";
import Header from '../pokedex/Header';
import "./style/stylePokedexId.css";

const PokedexId = () => {
  // uso navigate para el button de volver atras
  const navigate = useNavigate();

  //funcion del button para volver atras
  const toReturn = () => navigate("/pokedex");

  const { id } = useParams();

  const [poke, setPoke] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPoke(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="contenedor__pokeid">
      <Header/>
      <section className="pokeid__container-btn">
        <button onClick={toReturn} className="pokeid__bn">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </section>

    <div className="container__pokeid-desktop"> 

      <section className="pokeid__img-text">

        <figure className="img-container">
          <img src={poke?.sprites.other["home"].front_shiny} />
        </figure>

        {/* en este section tenemos el id y el name por un lado
            luego el peso y altura. */}

        <div className="pokeid__text">

          <div className="text__id-name">
            <h2 className="text__id-name-item">#{poke?.id}</h2>
            <h3 className="text__id-name-item">{poke?.name}</h3>
          </div>

          <hr className="pokeid__text-division"/>

          {/* contenedor de peso y altura */}
          <div className="text__weight-height">
            <div className="text__item">
              <p>Weight</p>

              <span>{poke?.weight}</span>
            </div>
            <div className="text__item">
              <p>Height</p>
              <span>{poke?.height}</span>
            </div>
          </div>
          
        </div>

        <div className="pokeid__rasgos-container">
          <div className="type">
            <p>Type</p>
            <div className="type-name">
              <span className="type__name-item">{poke?.types[0].type.name} </span>
              {poke?.types[1] && (
                <span className="type__name-item">{poke?.types[1].type.name}</span>
              )}
            </div>
          </div>

          <div className="type">
            <p>Skills</p>
            <div className="type-hability">
              <span className="type-hability-item">{poke?.abilities[0].ability.name}</span>
              <span className="type-hability-item">{poke?.abilities[1].ability.name}</span>
            </div>
          </div>
        </div>

      </section>

      <StatsPokemon poke={poke} />

      <Movements poke={poke} />

      </div>
    </article>
  );
};

export default PokedexId;
