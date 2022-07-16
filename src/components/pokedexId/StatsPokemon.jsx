import React from 'react'
import styled from "styled-components";
import './style/styleStats.css'

  /* use styled-components para que el color de los stats aumente o disminuya dependiendo d sus valor*/
const Stats = styled.div`
max-width: 80%;
padding: 5px;
background: rgb(130, 130, 130, 1);
background: linear-gradient(
  90deg,
  rgba(232, 218, 53, 1) 0%,
  rgba(232, 218, 53, 1) ${(props) => (props.stats * 100) / 150 - 10}%,
  rgba(230, 74, 13, 1) ${(props) => (props.stats * 100) / 150}%,
  rgba(255, 255, 255, 0.5) ${(props) => (props.stats * 100) / 150}%,
  rgba(255, 255, 255, 0.7) 100%
);
`;



const StatsPokemon = ({poke}) => {

  return (
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
        <Stats
          stats={poke?.stats[0].base_stat}
          className="stats-color"
        />
      </div>
      <div className="stats-item">
        <div className="item-cont">
          <span className="item-name">{poke?.stats[1].stat.name}</span>
          <span className="item-valor">
            {poke?.stats[1].base_stat}/150
          </span>
        </div>

        <Stats
          stats={poke?.stats[1].base_stat}
          className="stats-color"
        />
      </div>
      <div className="stats-item">
        <div className="item-cont">
          <span className="item-name">{poke?.stats[2].stat.name}</span>
          <span className="item-valor">
            {poke?.stats[2].base_stat}/150
          </span>
        </div>
        <Stats
          stats={poke?.stats[2].base_stat}
          className="stats-color"
        />
      </div>
      <div className="stats-item">
        <div className="item-cont">
          <span className="item-name">{poke?.stats[3].stat.name}</span>
          <span className="item-valor">
            {poke?.stats[3].base_stat}/150
          </span>
        </div>
        <Stats
          stats={poke?.stats[3].base_stat}
          className="stats-color"
        />
      </div>
      <div className="stats-item">
        <div className="item-cont">
          <span className="item-name">{poke?.stats[4].stat.name}</span>
          <span className="item-valor">
            {poke?.stats[4].base_stat}/150
          </span>
        </div>
        <Stats
          stats={poke?.stats[4].base_stat}
          className="stats-color"
        />
      </div>
      <div className="stats-item">
        <div className="item-cont">
          <span className="item-name">{poke?.stats[5].stat.name}</span>
          <span className="item-valor">
            {poke?.stats[5].base_stat}/150
          </span>
        </div>
        <Stats
          stats={poke?.stats[5].base_stat}
          className="stats-color"
        />
      </div>
    </div>
  </section>
  )
}

export default StatsPokemon