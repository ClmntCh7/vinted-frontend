import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="container">
      <header>
        <div className="Header-logo">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="Header-search">
          <div>
            <input type="search" placeholder="Rechercher des articles" />
          </div>
        </div>
        <div className="Header-button">
          <div>
            <button>S'inscrire</button>
            <button>Se connecter</button>
          </div>
          <div>
            <button>Vends tes articles</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
