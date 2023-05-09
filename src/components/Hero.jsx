import { Link, useLocation } from "react-router-dom";

const Hero = ({ visible, setVisible, setModalToggle, token }) => {
  const location = useLocation();
  return (
    <section className="Hero">
      <div className="Hero-background">
        <img
          className="Hero-tearImg"
          src="https://lereacteur-vinted.netlify.app/static/media/tear.884480420945b3afd77b44a6c5f98567.svg"
          alt=""
        />
        <div className="container">
          <div className="Hero-card">
            <p>Prêts à faire du tri dans vos placards ?</p>
            {token ? (
              <Link to="/offer/publish">
                <button>Commencer à vendre</button>
              </Link>
            ) : (
              <button
                className="Hero-sell-button"
                onClick={() => {
                  setVisible(!visible);
                  setModalToggle(2);
                  location.state = { from: "/offer/publish" };
                }}
              >
                Commencer à vendre
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
