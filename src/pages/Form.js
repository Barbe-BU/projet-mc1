import React from "react";
import Head from "../components/Head/Head";
import Nav from "../components/Nav/Nav";

export default function Form() {
  return (
    <>
      <Head />
      <div className="div-main">
        <h1 style={{ textAlign: "center" }}>
          En attente de connaissances <br />
          sur les Formulaires
        </h1>
        <Nav />
      </div>
    </>
  );
}
