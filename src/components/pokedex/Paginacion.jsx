import axios from 'axios';
import React from 'react'
import '../../style/PaginacionStyle.css'

const Paginacion = ({p, setUrl}) => {

    const onPrevious = () => {
        setUrl(p.previous);
      };
    
      const onNext = () => {
        setUrl(p.next);
      };
  return (
    <div className='container-pagination'>
        <ul className="pagination-buttons">
          <li className="menu-item">
            <button onClick={() => onPrevious()}>Previous</button>
          </li>
          <li className="menu-item">
            <button onClick={() => onNext()}>Next</button>
          </li>
      </ul>
    </div>
  )
}

export default Paginacion