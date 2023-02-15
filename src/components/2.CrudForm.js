//config rafce y imrce (usaremos los dos hooks)

import React, { useState, useEffect } from 'react';


//Agregamos alguna variable a la initial form para evitar problemas
const initialForm = {
    name:"",
    constellation:"",
    id:null
}

const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) => {//creamos los eventos con las funciones
    //Creamos la variablñe usestate para asignar las nuevas variablers
    const [form, setForm] = useState(initialForm);

    //3.3 Usamos useefect que se ejecutarácuando la variable data to edit tenga valores y lo montamos en el form
    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);//montamos valores de datato edit
        }else{
            setForm(initialForm);//valores iniciales
        }
    }, [dataToEdit]);


    const handleChange = (e) => {
        //los inputs son controlados por ele stado
        setForm({
            ...form,
            [e.target.name]:e.target.value,
        });
        
    }
    const handleSubmit = (e) => {
        //Para controlar el submit
        e.preventDefault();//para que no se autoprocese el formulario
        //verificar que no se vaya vacio
        if(!form.name || !form.constellation){
            alert("Datos incompletos");
            return
        }
        //si el id es null entonces se crea 
        if(form.id===null){
            createData(form);//la data viene de data(usestate),
        }
        else{
            updateData(form);
        }

        handleReset();

    }
    const handleReset = (e) => {
        //Para controlar el reset - limpiar el form y el estado de la app
        setForm(initialForm);
        setDataToEdit(null);//actualizamos la data como nulo
    }
  return (
    <div>
        {/*Conditional Render*/}
        <h3>{dataToEdit ? "Editar" : "Agregar" }</h3>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='name' 
                placeholder='Nombre' 
                onChange={handleChange} 
                value={form.name}
            />
            <input 
                type="text" 
                name='constellation' 
                placeholder='Constelación'
                onChange={handleChange} 
                value={form.constellation}
            />
            <input 
                type="submit" 
                value="Enviar"
            />
            <input 
                type="reset"
                value="Limpiar"
                onClick={handleReset}
            />
        </form>
    </div>
  );
};

export default CrudForm