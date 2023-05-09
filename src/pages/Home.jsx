import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import handleErrors from "../utils/handleErrors";

const Home = ({
  keyword,
  setErrorMessage,
  filter,
  setFilter,
  sort,
  visible,
  setVisible,
  setModalToggle,
  token,
  finalPriceRange,
}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const newFilters = { ...filter };
        setFilter((newFilters.title = keyword));
        setFilter((newFilters.sort = sort));
        setFilter((newFilters.priceMin = finalPriceRange[0]));
        setFilter((newFilters.priceMax = finalPriceRange[1]));
        sort
          ? (newFilters.sort = "price-desc")
          : (newFilters.sort = "price-asc");
        const entries = Object.entries(newFilters);
        const filters = entries.map((entry) => {
          let [key, value] = entry;
          const filter = `${key}=${value}`;
          return filter;
        });
        let path = "";
        for (let i = 0; i < filters.length; i++) {
          if (i === 0) {
            path = "?" + filters[0];
          }
          if (i > 0) {
            path += "&&" + filters[i];
          }
        }
        const response = await axios.get(
          `https://site--vinted-backend--m4snx7ydrpgs.code.run/offers/${path}`
        );
        setData(response.data.message);
        setLoading(false);
      } catch (error) {
        console.log("ERROR", error);
        handleErrors(error, setErrorMessage);
      }
    };

    getData();
  }, [keyword, sort, setErrorMessage, filter, setFilter, finalPriceRange]);

  return loading ? (
    <div className="container">
      <span>En cours de chargement... </span>
    </div>
  ) : (
    <div>
      <main>
        <Hero
          visible={visible}
          setVisible={setVisible}
          setModalToggle={setModalToggle}
          token={token}
        />
        <div className="container">
          <Offers data={data.offers} keyword={keyword} />
        </div>
      </main>
    </div>
  );
};

export default Home;
