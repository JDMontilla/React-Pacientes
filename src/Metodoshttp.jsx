import React from "react";
import { GrGroup } from "react-icons/gr";
import "./botones.css"

export function Delete({ onClick }) {
  return (
    <button type="button" className="btn btn-outline-danger" onClick={onClick}>
      Delete
    </button>
  );
}

export function Edit({ onClick }) {
  return (
    <button type="button" className="btn btn-outline-success" onClick={onClick}>
      Edit
    </button>
  );
}

export function Create({onClick}) {
  return (
    <>
    <button className="crear" onClick={onClick}>
      <GrGroup type="button" className="icono-personalizado"/>
        Crear Paciente
    </button>
    </>
  );
}
