import React from 'react'
import { useRef } from 'react';
import './style/styleMovements.css'


const Movements = ({poke}) => {

  const movements = useRef();
  const rotate = useRef();

  const openFilter = () => {
    movements.current.classList.toggle("open-list");
    movements.current.classList.toggle("close-list");
    rotate.current.classList.toggle("rotate-icon-open");
  };



  return (
    <article className="card-container-movements">
      <div className="movements__btn-filter">
        <span>Movements</span>
        <i
          ref={rotate}
          onClick={openFilter}
          className="fa-solid fa-arrow-right-from-bracket"
        ></i>
      </div>

      <div className="close-list movements-menu" ref={movements}>
      {poke?.moves.map((m) => (
          <ul className="menu__items-container" key={m.move.name}>
            <li
              className="container__movements-name"
            >
              <span href="#" className="movements-name">
              {m.move.name}
              </span>
            </li>
          </ul>
        ))}
      </div>
  
</article>
  )
}

export default Movements