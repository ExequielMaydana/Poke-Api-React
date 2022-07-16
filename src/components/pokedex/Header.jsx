import React from "react";
import "./style/styleHeader.css";
import image from "../../assets/img/pokebienvenida.png";

const Header = ({ setUrl,  setTypePokemon, setIdPagina}) => {

  const handleClick = () => {
    setTypePokemon('All')
    const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1154'
    setUrl(URL)
    setIdPagina(1)
  }

  return (
    <header className="header">
      <div className="header-img">
        <img src={image} onClick={handleClick} className="img-btn" />
      </div>
    </header>
  );
};

export default Header;
