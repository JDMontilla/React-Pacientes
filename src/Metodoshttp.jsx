import React from "react";

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
