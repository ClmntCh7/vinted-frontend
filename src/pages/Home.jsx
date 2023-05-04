import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Offers from "../components/Offers";

const Home = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <div className="container">
      <span>En cours de chargement... </span>
    </div>
  ) : (
    <div className="container">
      <main>
        <Hero />
        <Offers data={data.offers} />
      </main>
    </div>
  );
};

export default Home;
