import { Link } from "react-router-dom";
import "./Head.css";
import Logo from "./logo-barbe-bu.png";

function Head() {
  return (
    <Link to="/" className="header">
      <div className="HeadComponent">
        <img className="logo-bb" src={Logo} />
        <h1 className="title">
          Projet <span>MC 1</span>
        </h1>
        <img
          className="logo-mk"
          src={
            "https://www.mikecodeur.com/wp-content/uploads/2020/07/mike-codeur-min.png"
          }
        />
      </div>
    </Link>
  );
}

export default Head;
