import { Link, useLocation } from "react-router-dom";

const Hero = ({ visible, setVisible, setModalToggle, token }) => {
  const location = useLocation();
  return (
    <section className="Hero">
      <div>
        <div>
          <p>Prêts à faire du tri dans vos placards ?</p>
          {token ? (
            <Link to="/offer/publish">
              <button>Commencer à vendre</button>
            </Link>
          ) : (
            <button
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
    </section>
  );
};

export default Hero;
