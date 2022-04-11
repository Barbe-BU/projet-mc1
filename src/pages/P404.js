import React from "react";
import { Link } from "react-router-dom";

export default function p404() {
  return (
    <div className="div-main">
      <div>
        <h2>Erreur 404</h2>
        <h1>Cette page n'existe pas</h1>
        <Link to="/">
          <button className="back-to-home">Revenir à l'Accueil</button>
        </Link>
      </div>
    </div>
  );
}
