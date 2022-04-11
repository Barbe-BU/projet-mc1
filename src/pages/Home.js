import React from "react";
import Nav from "../components/Nav/Nav";
import Head from "../components/Head/Head";

export default function Accueil() {
  return (
    <>
      <Head />
      <div className="div-main">
        <h1 className="bienvenue">Bienvenue sur mon 1er projet</h1>
        <Nav />
      </div>
    </>
  );
}
