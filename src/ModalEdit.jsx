import React, { useState } from "react";
import axios from 'axios'; // Importamos axios para realizar solicitudes HTTP
import './modal.css';

function ModalEditarPaciente({ paciente, onClose }) {// es un componente funcional que recibe dos props: paciente (un objeto con los datos del paciente a editar) y onClose (una función para cerrar el modal).
    // Definimos el estado local 'formData' que contendrá los datos del formulario,
    // inicializándolo con los datos del paciente pasado como prop.
    const [formData, setFormData] = useState({
        identificacion: paciente.identificacion,
        nombres: paciente.nombres,
        apellido: paciente.apellido,
        eps: paciente.eps,
        edad: paciente.edad,
        mora: paciente.mora,
    });

    // Manejador de cambios en los inputs del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target; // Extraemos el nombre y valor del input
        // Actualizamos el estado 'formData' con el nuevo valor del input correspondiente
        setFormData((prevData) => ({
            ...prevData,  // Copiamos los datos actuales
            [name]: value,  // Actualizamos el campo que cambió
        }));
    };

    // Manejador del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que el formulario recargue la página por defecto

        try {
            // Realizamos la solicitud PUT al servidor usando axios
            const response = await axios.put(
                `http://localhost:3006/modificar/${paciente.id}`, // URL del endpoint con el ID del paciente
                formData, // Enviamos los datos del formulario como el cuerpo de la solicitud
                {
                    headers: {
                        "Content-Type": "application/json", // Indicamos que el contenido es JSON
                    },
                }
            );

            // Verificamos si la respuesta fue exitosa
            if (response.status === 200) {
                alert(response.data.msg); // Mostramos el mensaje de confirmación desde el backend
                onClose(); // Cerramos el modal usando la función pasada como prop
                window.location.reload(); // Recargamos la página para mostrar los cambios actualizados
            } else {
                alert("Error al editar el paciente"); // Mensaje en caso de que la solicitud no sea exitosa
            }
        } catch (error) {
            alert("Error de conexión"); // Mensaje en caso de error en la solicitud (por ejemplo, problemas de red)
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className="editarp">Editar Paciente</h2>
                <form className="formedit" onSubmit={handleSubmit}>
                    <label>Identificación:</label>
                    <input
                        type="text"
                        name="identificacion"
                        value={formData.identificacion}
                        onChange={handleInputChange}
                    />
                    <label>Nombres:</label>
                    <input
                        type="text"
                        name="nombres"
                        value={formData.nombres}
                        onChange={handleInputChange}
                    />
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                    />
                    <label>EPS:</label>
                    <input
                        type="text"
                        name="eps"
                        value={formData.eps}
                        onChange={handleInputChange}
                    />
                    <label>Edad:</label>
                    <input
                        type="number"
                        name="edad"
                        value={formData.edad}
                        onChange={handleInputChange}
                    />
                    <label>Esta en Mora:</label>
                    <div className="inputradio">
                    Si
                    <input
                        type="radio"
                        name="mora"
                        value={formData.mora === 'si'}
                        onChange={handleInputChange}
                    /> 
                    <input
                        type="radio"
                        name="mora"
                        value={formData.mora === 'no'}
                        onChange={handleInputChange}
                    /> No
                    </div>
                    <button className="boton-cambio" type="submit">Guardar Cambios</button>
                </form>
            </div>
        </div>
    );
}

export default ModalEditarPaciente;