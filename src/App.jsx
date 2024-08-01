import { useFetch } from "./useFetch";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Delete, Edit } from "./Metodoshttp";

function App() {
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
        window.location.reload();
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

  return (
    <>
      {cargando && <li>Cargando... </li>}
      <div className="div">
        <h1 class="text-info" style={{ textAlign: "center" }}>
          Información de los pacientes
        </h1>

        <table className="table">
          <thead className="head">
            <tr>
              <th
                class="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                ID
              </th>
              <th
                class="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                Identificación
              </th>
              <th
                class="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                Nombres
              </th>
              <th
                class="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                Apellidos
              </th>
              <th
                class="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                EPS
              </th>
              <th
                class="p-3 mb-2 bg-info-subtle text-info-emphasis"
                style={{ textAlign: "center" }}
              >
                Edad
              </th>
              <th
                class="p-3 mb-2 bg-info-subtle text-info-emphasis"
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
  );
}

export default App;
