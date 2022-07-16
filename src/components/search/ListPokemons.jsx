import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import "./style/styleList.css";

const ListPokemons = ({ setTypePokemon, filterPokemons, setPagina }) => {
  const list = useRef();
  const rotate = useRef();

  const openFilter = () => {
    list.current.classList.toggle("open-list");
    list.current.classList.toggle("close-list");
    rotate.current.classList.toggle("rotate-icon-open");
  };

  const handleClick = type => {
    setTypePokemon(type.name)
    setTimeout(() => {
      if(filterPokemons === 0){
        console.log(filterPokemons);
        setPagina(e => e + 1)
      }
    }, 100);
  }

  const [typePokemons, setTypePokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypePokemons(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-types-list">
      <div className="btn-filter">
        <span>Filter by type</span>
        <i
          ref={rotate}
          onClick={openFilter}
          className="fa-solid icon fa-arrow-right-from-bracket"
        ></i>
      </div>

      <div className="close-list container-list" ref={list}>
        {typePokemons.map((type) => (
          <ul className="list__show" key={type.url}>
            <li
              className="list__inside"
              onClick={() => handleClick(type)}
            >
              <span href="#" className="nav__link nav__link--inside">
                {type.name}
              </span>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ListPokemons;
