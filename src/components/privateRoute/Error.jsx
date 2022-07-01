import React from "react";
import { useNavigate } from "react-router-dom";
import gifimg from "../../assets/img/error.jpg";

const Error = () => {
  const navigate = useNavigate();

  const toReturn = () => navigate("/");

  return (
    <div className="container-error">
      <button onClick={toReturn}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <article className="error-card">
        <h2>
          <span>Ups!</span>
          <br />
          Debes introducir un nombre para poder continuar :)
        </h2>
        <figure className="card-img">
          <img src={gifimg} />
        </figure>
      </article>
    </div>
  );
};

export default Error;
