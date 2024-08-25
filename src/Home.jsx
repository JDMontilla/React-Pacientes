import React from "react";
import { Edit, Delete, Create } from "./Metodoshttp";
import { useFetch } from "./useFetch";
import { useState } from "react";
import "./App.css";

export function Home() {
  const { data, cargando } = useFetch("http://localhost:3006/pacientes");

  const irPacienteEditar = () => {
    window.location.href = 'http://localhost:5173/crear';
  };

  const eliminar = async (id) => {
    try {
      const response = await fetch(`http://localhost:3006/eliminar/${id}`, {
        method: "DELETE",
      });
      console.log("respuesta: ", response);
      if (response.ok) {
        const result = await response.json();
        alert(result.msg); // Mensaje de confirmación desde el backend
        // Actualizar la lista de pacientes
        window.location.reload(); // método que recarga la pagina actual para que la aplicación se vuelva a renderizar
      } else {
        alert("Error al eliminar el paciente");
      }
    } catch (error) {
      alert("Error de conexión");
    }
  };

  const editar = () => {
    alert("Haz editado un paciente");
  };

  return (
    <>
      {cargando && <li>Cargando... </li>}
      <h1 className="tittle">INFORMACIÓN DE LOS PACIENTES</h1>
      <div className="div">
        <Create onClick={irPacienteEditar}/>
        <table className="table">
          <thead className="head">
            <tr className="subtitulos">
              <th class="text-bg-warning p-3">ID</th>
              <th class="text-bg-warning p-3">Identificación</th>
              <th class="text-bg-warning p-3">Nombres</th>
              <th class="text-bg-warning p-3">Apellidos</th>
              <th class="text-bg-warning p-3">EPS</th>
              <th class="text-bg-warning p-3">Edad</th>
              <th class="text-bg-warning p-3">Acciones</th>
            </tr>
          </thead>
          <tbody className="body">
            {data?.map((user) => (
              <tr key={user.id}>
                <td style={{ textAlign: "center" }}>{user.id}</td>
                <td style={{ textAlign: "center" }}>{user.identificacion}</td>
                <td style={{ textAlign: "center" }}>{user.nombres}</td>
                <td style={{ textAlign: "center" }}>{user.apellido}</td>
                <td style={{ textAlign: "center" }}>{user.eps}</td>
                <td style={{ textAlign: "center" }}>{user.edad}</td>
                <td className="d-flex justify-content-center actions-cell">
                  <Edit onClick={editar} />
                  <Delete onClick={() => eliminar(user.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </>
  );
}
