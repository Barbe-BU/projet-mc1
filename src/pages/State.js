import React, { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav/Nav";
import Head from "../components/Head/Head";
import "./State.css";

export default function State() {
  const [inspecteur, setInspecteur] = useState(["Barbe-Bu, Femme Barbe-BU, "]);
  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef);
  }, []);
  const addInspecteur = (e) => {
    e.preventDefault();
    inputRef.current.value &&
      setInspecteur([...inspecteur, ` ${inputRef.current.value},`]);
    inputRef.current.value = "";
  };
  return (
    <>
      <Head />
      <div className="div-main">
        <label htmlFor="name">Quelle est ton nom ? :</label>
        <input
          type="text"
          name="name"
          id="button"
          required
          maxLength="12"
          ref={inputRef}
        />
        <button onClick={addInspecteur}>Inspecteur</button>
        <div>
          <h2 className="title-inspecteur">
            {" "}
            le<span>sInspecteurDuPro</span>jet
          </h2>
          <div className="tableau-inspecteur">{inspecteur}</div>
        </div>
        <p className="info-pratique">
          la mise en pratique de ce que j'ai appris sur les State
        </p>
        <Nav />
      </div>
    </>
  );
}
