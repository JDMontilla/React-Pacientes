import React from "react";
import { Edit, Delete } from "./Metodoshttp";
import {Create} from "./Create"
import { useFetch } from "./useFetch";

export function Home() {

  const { data, cargando } = useFetch("http://localhost:3006/pacientes");

  const eliminar = async (id) => {
    try {
      const response = await fetch(`http://localhost:3006/eliminar/${id}`,{
        method: 'DELETE'
      });
      console.log('respuesta: ',response)
      if (response.ok) {
        const result = await response.json();
        alert(result.msg); // Mensaje de confirmación desde el backend
        // Actualizar la lista de pacientes
        window.location.reload(); // método que recarga la pagina actual para que la aplicación se vuelva a renderizar
      } else {
        alert('Error al eliminar el paciente');
      }
    } catch (error) {
      alert('Error de conexión');
    }
  };

    const editar = () => {
      alert("Haz editado un paciente");
    };

  return(
    <>
    {cargando && <li>Cargando... </li>}
      <div className="div">
        <h1 className="text-info" style={{ textAlign: "center", marginTop: '20px'}}>
          INFORMACIÓN DE LOS PACIENTES
        </h1>
        <Create />
        <table className="table">
          <thead className="head">
            <tr>
              <th
                className="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                ID
              </th>
              <th
                className="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                Identificación
              </th>
              <th
                className="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                Nombres
              </th>
              <th
                className="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                Apellidos
              </th>
              <th
                className="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                EPS
              </th>
              <th
                className="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                Edad
              </th>
              <th
                className="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="body">
            {data?.map((user) => (
              <tr key={user.id}>
                <td style={{ textAlign: "center" }}>{user.id}</td>
                <td style={{ textAlign: "center" }}>{user.Identificación}</td>
                <td style={{ textAlign: "center" }}>{user.Nombres}</td>
                <td style={{ textAlign: "center" }}>{user.Apellidos}</td>
                <td style={{ textAlign: "center" }}>{user.EPS}</td>
                <td style={{ textAlign: "center" }}>{user.Edad}</td>
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
  )
};