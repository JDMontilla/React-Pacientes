import React from "react";
import { useFetch } from "./useFetch";
import "./App.css";
import { useState } from "react";

export function HomeMed() {
  const { data, cargando } = useFetch("http://localhost:3006/medico");

  return (
    <>
      {cargando && <li>Cargando... </li>}
      <div className="div">
        <table className="table">
          <thead className="head">
            <tr className="subtitulos">
              <th className="text-bg-warning p-3">ID</th>
              <th className="text-bg-warning p-3">Nombre Medico</th>
              <th className="text-bg-warning p-3">Especialidad</th>
              <th className="text-bg-warning p-3">Horario de ingreso</th>
              <th className="text-bg-warning p-3">Horario de salida</th>
            </tr>
          </thead>
          <tbody className="body">
            {data?.map((user) => (
              <tr key={user.id}>
                <td style={{ textAlign: "center" }}>{user.id}</td>
                <td style={{ textAlign: "center" }}>{user.nombre_medico}</td>
                <td style={{ textAlign: "center" }}>{user.especialidad}</td>
                <td style={{ textAlign: "center" }}>{user.horario_entrada}</td>
                <td style={{ textAlign: "center" }}>{user.horario_salida}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
