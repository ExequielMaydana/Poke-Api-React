import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import gifpokeid from "../../assets/img/pokegif.gif";
import './style/stylePokemonCard.css'

const PokemonCard = ({ name, typePokemon, setFilterPokemons}) => {

  const [poke, setPoke] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        setPoke(res.data)
        if(poke?.types[0].type.name === typePokemon || (poke?.types[1] && poke?.types[1].type.name === typePokemon)){
          console.log(poke?.types[1]);
          setFilterPokemons((e) => e + 1)
        }
      })
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
              {poke?.name}
            </figcaption>
            <p>
              {poke?.types[0].type.name}{" "}
              {poke?.types[1] && `- ${poke?.types[1].type.name}`}
            </p>
          </figure>
          <hr className="divition"/>
          <section className="card-description">

            <div className="description-text">
              <div className="text-item">
                <p className="item-p"><span className="item-sp">{poke?.stats[0].stat.name}: </span>{poke?.stats[0].base_stat}</p>
                <p className="item-p"><span className="item-sp">{poke?.stats[1].stat.name}: </span>{poke?.stats[1].base_stat}</p>
              </div>
              <div className="text-item">
                <p className="item-p"><span className="item-sp">{poke?.stats[2].stat.name}: </span>{poke?.stats[2].base_stat}</p>
                <p className="item-p"><span className="item-sp">{poke?.stats[5].stat.name}: </span>{poke?.stats[5].base_stat}</p>
              </div>
            </div>

              <figure
                className="pokeid-img"
              >
                <img src={gifpokeid} onClick={() => navigate(`/pokedex/${poke.id}`)}/>
                <figcaption>Ver mas.</figcaption>
              </figure>

          </section>
        </article>
      )}
    </>
  );
};

export default PokemonCard;
