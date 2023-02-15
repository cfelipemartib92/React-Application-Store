//Importamos 
import React, { useState, useEffect } from 'react';
import CrudTableRow from './3.CrudTableRow';

//son las props que viene de la función en CrudApp.js
const CrudTable = ({data,setDataToEdit,deleteData}) => {//data asi se llama la propiedad que creamos en el crudtable de crudapps data=({data})
  return (
    <>
        <div>  
            <h3>Tabla de datos:</h3>
            <table>
                <thead>
                    <tr key="">
                        <th>Nombre</th>
                        <th>Constelación</th>
                        <th>Acciones</th>{/*Botones*/}
                    </tr>
                </thead>
                <tbody>
                    {/*Condituinbal render si no hay data poonga vacio*/}
                    {data.length ===0? 
                    (<tr><td colSpan="3">Sin Datos</td></tr>) 
                    : 
                    (data.map(el=>
                        <CrudTableRow 
                            key={el.id}     
                            el={el}
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData}
                        />
                    ))}
                    {/*3.2 Pasamos las props de la funcion CrudTable en el jsx */}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default CrudTable