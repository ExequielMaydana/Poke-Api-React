import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gifpokeid from "../../assets/img/pokegif.gif";

const PokemonCard = ({ name, typePokemon}) => {

  const [poke, setPoke] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setPoke(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {(typePokemon === "All" ||
        poke?.types[0].type.name === typePokemon ||
        (poke?.types[1] && poke?.types[1].type.name === typePokemon)) && (
        <article className="container-card">
          <figure className="card-figure">
            <img src={poke?.sprites.other["home"].front_shiny} />
            <figcaption>
              <b>Name: </b>
              {poke?.name}
            </figcaption>
            <p>
              <b>Type: </b>
              {poke?.types[0].type.name}{" "}
              {poke?.types[1] && `/ ${poke?.types[1].type.name}`}
            </p>
          </figure>

          <section className="card-description">
            <div className="description-text">
              {poke?.stats.map((item) => (
                <ul key={item.stat.name} className="container-text">
                  <li className="text">
                    <p>{item.stat.name}</p>
                    <span>{item.base_stat}</span>
                  </li>
                </ul>
              ))}
            </div>
            <div className="button-ir-pokeid">
              <figure
                onClick={() => navigate(`/pokedex/${poke.id}`)}
                className="pokeid-img"
              >
                <img src={gifpokeid} />
                <figcaption>Ver mas.</figcaption>
              </figure>
            </div>
          </section>
        </article>
      )}
    </>
  );
};

export default PokemonCard;
