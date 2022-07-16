import React from 'react'
import './style/stylePaginacion.css'


const Paginacion = ({pagina, setPagina, maximo, idPagina, setIdPagina}) => {

  

  const nextPage = () => {
    if(pagina >= maximo){
        setPagina(1)
        setIdPagina(1)
    }else{
      setPagina(pagina + 1)
      setIdPagina(idPagina + 1)
    }

  }

  const prevPage = () => {
    if(pagina <= 1){
      setPagina(1)
      setIdPagina(1)
    }else{
      setPagina(pagina - 1)
      setIdPagina(idPagina - 1)
    }

  }

  const onKeyDown = (e) => {
    if(e.keyCode == 13){
      setPagina(parseInt(e.target.value))
      if(parseInt(e.target.value < 1) || // si el numero que pone el usuario es -1 que no deje seguir bajando de pagina.
       parseInt(e.target.value) > Math.ceil(maximo) || // si el numero que pone el usuario es mayor a 3 que no lo tome.
       isNaN( parseInt(e.target.value)) // para que no tome string, ni true, ni false, etc.
       ){
        setPagina(1)
        setIdPagina(1)
       }else{
        setPagina(parseInt(e.target.value))
       }
    }
  }

  const onChange = (e) => {
    setIdPagina(e.target.value)
  }

  return (
    <div className='container-pagination'>
      <button className='pagination-btn' onClick={prevPage}><i className="fa-solid fa-circle-arrow-left"></i></button>
      <div className='pagination-container-input'>
        <span className='input-span'>Page</span>
        <input className='pagination-input'
        onChange={e => onChange(e)}
         onKeyDown={(e) => onKeyDown(e)} name='page' autoComplete='off' value={idPagina}/>
        <span className='input-span'>De {Math.floor(maximo)}</span>
      </div>
      <button className='pagination-btn' onClick={nextPage}><i className="fa-solid fa-circle-arrow-right"></i></button>
    </div>
  )
}

export default Paginacion