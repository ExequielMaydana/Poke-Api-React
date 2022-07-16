import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nameGlobal } from "../../store/slices/nameUser.slice";
import './style/styleRootPath.css'

// ruta raiz
const RootPath = ({setIsLogged}) => {

  // dispatch para mandar el name al store de redux
  const dispatch = useDispatch();

  // en navigate paso la ruta pokedex
  const navigate = useNavigate();

  // aca guardo el name que ingresan en el input
  const [nameInput, setNameInput] = useState("");

  /* cuando apreto el button se ejecuta esta funcion y manda el name al store,
     tambien se valida que el input no este vacio y que tampoco me tome los espacios como un caracter.  
  */
 
  const alertValue = () => {
    dispatch(nameGlobal(nameInput));
    if(nameInput.trim() !== ''){
      setIsLogged(true)
      navigate("/pokedex");
    }else{
      navigate("/error404")
    }
  };

  return (
    <article className="container-card-raiz">
      <section className="card-welcom-container">
        <div className="card-welcom-text-input">
        <h1>¡Hola entrenador!</h1>
        <p>Para poder comenzar, dame tu nombre.</p>
        <div className="card-input">
          <input
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Tu nombre..."
          />
          <button onClick={alertValue}>Comenzar</button>
        </div>
        </div>
      </section>
    </article>
  );
};

export default RootPath;
