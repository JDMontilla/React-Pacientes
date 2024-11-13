import React from "react";
import { useNavigate } from "react-router-dom";
import "./citasMed.css";

export function Presentacion() {
  const navigate = useNavigate();

  const irRegistroPacientes = () => {
    navigate("/crear"); // Aquí puedes poner la ruta a la que quieras redirigir
  };

  return (
    <>
      <div className="encabezado">
        <h1>Bienvenido a CitaMed </h1>
        <p>
          Aqui puedes solicitar tu cita con tu especialista preferido consulta
          disponibilidad{" "}
        </p>
      </div>
      <section className="container">
        <header>
          <div className="botonesir">
            <button onClick={irRegistroPacientes}>Registrarse</button>
            <button>Inicia sesión</button>
            <button>Pide tu cita 🤧 </button>
            <button>Personal médico</button>
          </div>
        </header>
        <aside>
          <h2>Últimas Noticias</h2>
          <p>¡Nuevo servicio de telemedicina disponible a partir de octubre!</p>
          <img src="./formdibujo.jpg" alt="virtuallamada" className="virtual" />
          <p>La doctora Ana Rodríguez se une a nuestro equipo de pediatría.</p>
          <img src="/doctora2.png" alt="nuevadoctora" className="doctora" />
          <p>Protégete y vacúnate contra la feibre amarilla.</p>
          <img src="/vacuna.jpg" alt="nuevadoctora" className="vacuna" />
        </aside>
        <main>
          <div className="indice">
            <h2>Misión</h2>
            <p>
              Facilitar el acceso a atención médica especializada ofreciendo una
              plataforma en línea sencilla, rápida y segura, donde los usuarios
              puedan agendar citas con profesionales de la salud de manera
              eficiente y desde cualquier lugar. Buscamos mejorar la experiencia
              del paciente al reducir tiempos de espera y optimizar la
              coordinación entre médicos y pacientes.
            </p>
            <h2>Visión</h2>
            <p>
              Ser la plataforma líder en la gestión de citas médicas en línea,
              reconocida por su tecnología innovadora, servicio al cliente
              excepcional y por promover un acceso equitativo a servicios de
              salud especializados a nivel global. Aspiramos a mejorar la
              calidad de vida de millones de personas conectando a los pacientes
              con los mejores profesionales de salud de manera ágil y confiable.
            </p>
          </div>
          <div className="imagen-cita">
            <img src="/2649891.jpg" alt="saludo virtual" />
            <img src="/5216002.jpg" alt="medicos" />
            <img src="/medicos3.jpg" alt="medicos1" />
          </div>
          <div className="sectionmain">
          <h1 className="h1main">Nuestros Beneficios</h1>
              <img src="./compra.png" alt="compras" className="compra" />
              <img src="./paloma.png" alt="paloma" className="paloma" />
              <img src="./manos.png" alt="corazon" className="corazon" />
            <div className="beneficio">
              <h4>Seguro de vida</h4>
              <h4 className="privilegios">Privilegios</h4>
              <h4 className="exequial">Servicio Exequial</h4>
            </div>
          </div>
        </main>
        <footer>
          <ul class="info">
            <li>Países</li>
            <li>Regiones</li>
            <li>Ciudades</li>
            <li>Zonas</li>
            <li>Hospitales</li>
            <li>Médicos</li>
            <li>Noticias</li>
          </ul>
          <ul class="info2">
            <li>Covid-19</li>
            <li>Tecnología</li>
            <li>Micro Chips</li>
            <li>Tendencias</li>
            <li>Vacunas</li>
            <li>Deberes</li>
            <li>Derechos</li>
          </ul>
          <ul class="info3">
            <li>Foro comunitario</li>
            <li>Patrocinadores</li>
            <li>Inversionistas</li>
            <li>últimas actualizaciones</li>
            <li>Opciones de cancelación de citas</li>
            <li>Centro de ayuda</li>
            <li>Dejanos tus comentarios</li>
          </ul>
          <p className="siguenos1">Siguenos en nuestras redes sociales</p>
          <img src="./redes.png" alt="redesociales" className="redes" />
          <div className="infoGeneralFooter">
            <h5>🧑‍💻 Email: jhonmontilla14@gmail.com</h5>
            <h5>📢 Telefono: 3003394453</h5>
            <h5>🏥 Dirección: Cll 58 k # 81 i 52 sur</h5>
            <h5>🌃 Bogotá,Colombia</h5>
          </div>
        </footer>
      </section>
    </>
  );
}
