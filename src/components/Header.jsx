import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Cookies from "js-cookie";

const Header = ({ token, setToken }) => {
  const removeCookie = () => {
    Cookies.remove("token");
  };
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
          {token ? (
            <div>
              <button onClick={removeCookie}>Se Deconnecter</button>
            </div>
          ) : (
            <div>
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </div>
          )}
          <div>
            <button>Vends tes articles</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
