//1.6 configuramos rafce
import React from 'react'

//pasamos tambien las props que venían en la tavle;: 
const CrudTableRow = ({el, setDataToEdit,deleteData}) => {
    //3.2 Desestructuramos la prop 
    let {name,constellation,id}=el // para simplificar cuando se llame
  return (
    <>
        <tr key="">
            <td>{name}</td>
            <td>{constellation}</td> 
            <td>
                <button onClick={()=>setDataToEdit(el)}>Editar</button>
                <button onClick={()=>deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    </>
  )
}

export default CrudTableRow