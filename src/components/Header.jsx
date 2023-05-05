import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Cookies from "js-cookie";

const Header = ({ token, setToken, visible, setVisible, setModalToggle }) => {
  const removeCookie = () => {
    Cookies.remove("token");
    setToken(null);
  };
  const handleSearch = () => {};
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
            <input
              type="search"
              placeholder="Rechercher des articles"
              onChange={handleSearch}
              name="search"
              // value={}
            />
          </div>
        </div>
        <div className="Header-button">
          {token ? (
            <div>
              <button onClick={removeCookie}>Se Deconnecter</button>
            </div>
          ) : (
            <div>
              <button
                onClick={() => {
                  setVisible(!visible);
                  setModalToggle(1);
                }}
              >
                S'inscrire
              </button>
              <button
                id="login"
                onClick={(e) => {
                  setVisible(!visible);
                  setModalToggle(2);
                }}
              >
                Se connecter
              </button>
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
