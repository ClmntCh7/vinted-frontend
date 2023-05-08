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
  values,
}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const newFilters = { ...filter };
  setFilter((newFilters.title = keyword));
  setFilter((newFilters.sort = sort));
  setFilter((newFilters.priceMin = values[0]));
  setFilter((newFilters.priceMax = values[1]));

  sort ? (newFilters.sort = "price-desc") : (newFilters.sort = "price-asc");

  const entries = Object.entries(newFilters);
  const filters = entries.map((entry) => {
    let [key, value] = entry;
    const filter = `${key}=${value}`;
    return filter;
  });

  console.log(filters);

  let path = "";
  for (let i = 0; i < filters.length; i++) {
    if (i === 0) {
      path = "?" + filters[0];
    }
    if (i > 0) {
      path += "&&" + filters[i];
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers/${path}`
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        handleErrors(error, setErrorMessage);
      }
    };
    console.log(path);

    getData();
  }, [path, setErrorMessage]);

  return loading ? (
    <div className="container">
      <span>En cours de chargement... </span>
    </div>
  ) : (
    <div className="container">
      <main>
        <Hero />
        <Offers data={data.offers} keyword={keyword} />
      </main>
    </div>
  );
};

export default Home;
