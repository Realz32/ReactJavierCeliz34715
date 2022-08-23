import React from 'react';

const Formulario = (contBuscar) => {
  return (
    <div>
      <form className="d-flex"> 
        <input className="form-control me-sm-2" type="text" placeholder="¿Que desea buscar?" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
        </form>   
    </div>
  );
}

export default Formulario;
