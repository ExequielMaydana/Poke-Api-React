import axios from "axios";
import image from "../../assets/img/pokebienvenida.png";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

/* use styled-components para que el color de los stats aumente o disminuya dependiendo d sus valor*/
const Stats = styled.div`
  max-width: 90%;
  padding: 10px;
  background: rgb(130,130,130,1);
  background: linear-gradient(90deg, rgba(232,218,53,1) 0%,rgba(232,218,53,1) ${props => ((props.stats * 100) / 150) - 10}%, rgba(230,74,13,1) ${props => (props.stats * 100) / 150}%, rgba(130,130,130,1) ${props => (props.stats * 100) / 150}%, rgba(130,130,130,1) 100%);
`
const PokedexId = () => {
  
  // uso navigate para el button de volver atras
  const navigate = useNavigate()

  //funcion del button para volver atras
  const toReturn = () => navigate('/pokedex')

  const { id } = useParams();

  const [poke, setPoke] = useState();

  console.log(poke);
  
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPoke(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="contenedor-poke-pokeid">

      <article className="header">
      <div className="red-stripe"></div>
        <div className="black-stripe"></div>
        <div className="header-image">
          <img src={image} alt="" />
          <div className="image-elipse3">
            <div className="image-elipse4"></div>
          </div>
        </div>
      </article>

      <section className="container-button">
      <button onClick={toReturn}><i className="fa-solid fa-arrow-left"></i></button>
      </section>

      <section className="container-row"> 

      <article className="pokeid-card">

          <figure className="img-container">
            <img src={poke?.sprites.other["home"].front_shiny} />
          </figure>

        {/* en este section tenemos el id y el name por un lado
            luego el peso y altura. */}
        <section className="card-section-idname">
          <div className="idname-text">
            <h2>#{poke?.id}</h2>
            <h3>{poke?.name}</h3>
          </div>

          {/* contenedor de peso y altura */}
          <div className="text-weight-height">
            <div className="text-weight">
              <p>Peso</p>
              <span>{poke?.weight}</span>
            </div>
            <div className="text-height">
              <p>Altura</p>
              <span>{poke?.height}</span>
            </div>
          </div>
        </section>

        <section className="card-container-type-hability">
          <section className="type">
            <p>Tipo</p>
            <div className="type-name">
              <span className="name-t">{poke?.types[0].type.name} </span>
              {
                poke?.types[1] && <span className="name-t">
                {poke?.types[1].type.name}
              </span>
              }
            </div>
          </section>

          <div className="hability">
            <p>Habilidades</p>
            <div className="hability-name">
              <span className="name-h">
                {poke?.abilities[0].ability.name}
              </span>
              <span className="name-h">
                {poke?.abilities[1].ability.name}
              </span>
            </div>
          </div>
        </section>

        {/* section de stats */}
        <section className="card-stats">

          <div className="stats-title">
            <p>Stats</p>
          </div>

          <div className="stats-containter-items">

            <div className="stats-item">
              <div className="item-cont">
                <span className="item-name">{poke?.stats[0].stat.name}</span>
                <span className="item-valor">
                  {poke?.stats[0].base_stat}/150
                </span>
              </div>
              <Stats stats={poke?.stats[0].base_stat} className='stats-color'/>
            </div>
            <div className="stats-item">
              <div className="item-cont">
                <span className="item-name">{poke?.stats[1].stat.name}</span>
                <span className="item-valor">
                  {poke?.stats[1].base_stat}/150
                </span>
              </div>

              <Stats stats={poke?.stats[1].base_stat} className='stats-color'/>
            </div>
            <div className="stats-item">
              <div className="item-cont">
                <span className="item-name">{poke?.stats[2].stat.name}</span>
                <span className="item-valor">
                  {poke?.stats[2].base_stat}/150
                </span>
              </div>
              <Stats stats={poke?.stats[2].base_stat} className='stats-color'/>
            </div>
            <div className="stats-item">
              <div className="item-cont">
                <span className="item-name">{poke?.stats[3].stat.name}</span>
                <span className="item-valor">
                  {poke?.stats[3].base_stat}/150
                </span>
              </div>
              <Stats stats={poke?.stats[3].base_stat} className='stats-color'/>
            </div>
            <div className="stats-item">
              <div className="item-cont">
                <span className="item-name">{poke?.stats[4].stat.name}</span>
                <span className="item-valor">
                  {poke?.stats[4].base_stat}/150
                </span>
              </div>
              <Stats stats={poke?.stats[4].base_stat} className='stats-color'/>
            </div>
            <div className="stats-item">

              <div className="item-cont">
                <span className="item-name">{poke?.stats[5].stat.name}</span>
                <span className="item-valor">
                  {poke?.stats[5].base_stat}/150
                </span>
              </div>
              <Stats stats={poke?.stats[5].base_stat} className='stats-color'/>
            </div>
          </div>
        </section>

      </article>

      <article className="card-container-movements">
        <h2>Movements</h2>
        <div className="movements">
          {poke?.moves.map((m) => (
            <div key={m.move.name} className="movements-item">
              <p>{m.move.name}</p>
            </div>
          ))}
        </div>
      </article>
      </section>
    </article>
  );
};

export default PokedexId;
