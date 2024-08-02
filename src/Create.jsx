import React from "react";
import { GrGroup } from "react-icons/gr";
import "./botones.css"

export function Create() {
  return (
    <>
    <button className="crear">
      <GrGroup className="icono" />
        Crear Paciente
    </button>
    </>
  );
}