import { Link } from "react-router-dom";
import logo from "../assets/logo.vinted.png";
import Cookies from "js-cookie";
import { Range } from "react-range";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({
  token,
  setToken,
  visible,
  setVisible,
  setModalToggle,
  keyword,
  setKeyword,
  sort,
  setSort,
  values,
  setValues,
  setfinalPriceRange,
}) => {
  const removeCookie = () => {
    Cookies.remove("token");
    setToken(null);
  };

  const location = useLocation();

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handlePriceRange = (values) => {
    setValues(values);
  };

  return (
    <div className="container">
      <header>
        <div className="Header-logo">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="Header-filters-block">
          <div className="searchbar-block">
            <input
              name="search"
              type="search"
              placeholder="Rechercher des articles"
              onChange={handleSearch}
              value={keyword}
            />
          </div>
          <div className="pricefilters-block">
            <div className="sortfilter-block">
              <label htmlFor="sort">
                <span>Trier par prix :</span>
                <input id="sort" type="checkbox" onChange={handleSort} />
              </label>
            </div>
            <div className="rangefilter-block">
              <div>
                <span>Prix entre :</span>
              </div>
              <div className="Range-component">
                <Range
                  step={1}
                  min={1}
                  max={500}
                  values={values}
                  onChange={handlePriceRange}
                  onFinalChange={() => {
                    setfinalPriceRange(values);
                  }}
                  renderTrack={({ props, children }) => (
                    <div className="Range-barre" {...props}>
                      {children}
                    </div>
                  )}
                  renderThumb={({ props, index }) => (
                    <div className="Range-thumbs" {...props}>
                      <span className="Header-Range-labels">
                        {values[index]}
                      </span>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Header-button-block">
          <div className="Header-button">
            {token ? (
              <div>
                <button
                  className="logout-button"
                  onClick={() => {
                    removeCookie();
                    navigate("/");
                  }}
                >
                  Se Deconnecter
                </button>
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
                  onClick={() => {
                    setVisible(!visible);
                    setModalToggle(2);
                  }}
                >
                  Se connecter
                </button>
              </div>
            )}
          </div>
          <div className="sell-button-block">
            {token ? (
              <Link to="/offer/publish">
                <button>Vends tes articles</button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  setVisible(!visible);
                  setModalToggle(2);
                  location.state = { from: "/offer/publish" };
                }}
              >
                Vends tes articles
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
