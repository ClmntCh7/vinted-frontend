import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Cookies from "js-cookie";
import { useState } from "react";
import { Range } from "react-range";

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
}) => {
  const removeCookie = () => {
    Cookies.remove("token");
    setToken(null);
  };

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
        <div className="Header-search">
          <div>
            <div>
              <input
                name="search"
                type="search"
                placeholder="Rechercher des articles"
                onChange={handleSearch}
                value={keyword}
              />
            </div>
            <div>
              <input type="checkbox" onChange={handleSort} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                margin: "2em",
              }}
            >
              <Range
                step={1}
                min={0}
                max={500}
                values={values}
                onChange={handlePriceRange}
                renderTrack={({ props, children }) => (
                  <>
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        width: "100%",
                        backgroundColor: "#ccc",
                      }}
                    >
                      {children}
                    </div>
                  </>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "22px",
                      width: "22px",
                      borderRadius: "50px",
                      backgroundColor: "#2CB1BA",
                    }}
                  ></div>
                )}
              />
            </div>
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
