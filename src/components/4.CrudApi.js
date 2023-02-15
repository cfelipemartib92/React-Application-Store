//3.1 Configuración rafce
import React, { useState } from 'react';

import CrudForm from './2.CrudForm';//importmaos automatic
import CrudTable from './2.CrudTable';


const CrudApi = () => {
    //agregamos una variable debase de datos para mandarla como data/prop
    const [db, setDb] = useState([]);//5.6.6 Agregamos arreglo vacio
    //id
    const [dataToEdit, setDataToEdit] = useState(null);

    //2.1 Funciones peticiones al Crud
    //CREATE
        const createData = (data) => {
            //creamos un valor para data.id
            data.id=Date.now();//usamos el data.now para asignar un id
            //console.log(data);//para ver que datos se están pasando como data
            setDb([...db,data]);//trae la data como la tengas y agregale data
        }
    //UPDATE
        const updateData = (data) => {
            //hay que generar u nuevo arreglo y caudno el map detect el id, modifique la data de ese id
            let newData = db.map(el=>el.id===data.id? data : el);//ternario, si id= entonces asigne data o sino deje el elemento igual
            setDb(newData);
        }
    //DELETE
        const deleteData = (id) => {
            //verificamos si está seguro - como es en js agregamos el window para que use el navegador
            let isDelete = window.confirm(`¿Estás seguro de eliminar el registro con el id? ${id}`)

            if(isDelete){
                let newData = db.filter(el=>el.id!==id);
                setDb(newData); 
            }else{
                return;
            }

        }

    //RENDER
  return (
    <div>
        <h2>CRUD App</h2>
        <article className="grid-1-2"> 
        
            {/*llamamos el form CrudForm.js - creamos propeidades para llamar los eventos */}
            <CrudForm 
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
            />{/*pasamos el data to edit para saber cuando va a ser editado o no */}
            {/*llamamos la table CrudTable.js - data=prop -> le paso la data*/}
            <CrudTable 
            data={db} 
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            />
            
        </article>
    </div>
  )
}

export default CrudApi
