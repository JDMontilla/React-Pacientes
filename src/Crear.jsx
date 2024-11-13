import React from "react";
import "./Crear.css";
import { useState} from "react";
import axios from "axios";

export function Crear() {

  const [identificacion, setIdentificacion] = useState(0)
  const [nombres, setNombres] = useState('')
  const [apellido, setApellido] = useState('')
  const [eps, setEps] = useState('')
  const [edad, setEdad] = useState(0)
  const [mora, setMora] = useState(true)

  const paciente ={
    'identificacion': identificacion,
    'nombres': nombres,
    'apellido': apellido,
    'eps': eps,
    'edad': edad,
    'mora': mora
  }

  const axiosPost = async () => {
    try{
      const respuesta = await axios.post('http://localhost:3006/crearpaciente', paciente);
      window.location.href = 'http://localhost:5173';
      console.log('respuesta:', respuesta)
      console.log('Paciente creado', respuesta.data);
    } catch(error){
      console.log('Error al crear paciente: ', error);
    }
  }

  return (
    <>
      <h1 className="tittle">Bienvenido aquí puedes crear tu usuario</h1>
        <form className="form-container1">
          <label htmlFor="identificacion">Identificación</label>          
          <input type="text" id="identificacion" onChange={(e) =>{
            setIdentificacion(e.target.value)
          } } name="identificacion" />
          
          <label htmlFor="nombres">Nombres</label>
          <input type="text" id="nombres" onChange={(e) => setNombres(e.target.value)} name="nombres" />

          <label htmlFor="apellido">Apellidos</label>
          <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} name="apellido" />

          <label htmlFor="eps">EPS</label>
          <input type="text" id="eps" onChange={(e) => setEps(e.target.value)} name="eps" />

          <label htmlFor="edad">Edad</label>
          <input type="text" id="edad" onChange={(e) => setEdad(e.target.value)} name="edad" />

          <label htmlFor="mora">Mora</label>
          <input type="checkbox" id="edad" onChange={(e) => {
            setMora(e.target.checked)
            console.log(e)}
            } name="mora" />

          <button className="botonform" type="button" onClick={axiosPost}>Enviar</button>
        </form>
    </>
  );
}
