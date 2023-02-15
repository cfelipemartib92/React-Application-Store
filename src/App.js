//Importamos react por mantener compatibilidad con versiones anteriores
import React from 'react';
import CrudApp from "./components/1.CrudApp";//1.3.
import CrudApi from './components/4.CrudApi';

function App() {
  return (
    <>
      
          <h1>Ejercicios con React</h1>
          <br/>
          <br/>
          {/*Agrego aquí el componente con API*/}
          <CrudApi/>
          <br/>
          <hr/>
          <br/>
          <CrudApp/>
          <hr/>
    </>
  );
}

export default App;
