import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://site--vinted-backend--m4snx7ydrpgs.code.run/offer/${id}`
        );
        setData(response.data.message);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return loading ? (
    <div className="container">
      <span>En cours de chargement... </span>
    </div>
  ) : (
    <main>
      <div className="OfferPage-body">
        <div className="container">
          <section className="OfferPage-container">
            <div className="OfferPage-pict">
              <img
                src={data.product_image && data.product_image[0].secure_url}
                alt=""
              />
            </div>
            <div className="OfferPage-details">
              <div className="OfferPage-productInfos">
                <div>{data.product_price}</div>

                {data.product_details.map((elem, index) => {
                  const keyName = Object.keys(elem)[0];
                  return (
                    <p key={keyName}>
                      <span>{keyName}</span> <span>{elem[keyName]}</span>
                    </p>
                  );
                })}
              </div>
              <div className="OfferPage-productDescr">
                <h3>{data.product_name}</h3>
                <p>{data.product_description}</p>
                <div className="OfferPage-userInfos">
                  <div>
                    {data.owner.account.avatar && (
                      <img
                        src={data.owner.account?.avatar?.secure_url}
                        alt=""
                      />
                    )}
                  </div>
                  <div>
                    <span>{data.owner.account.username}</span>
                  </div>
                </div>
              </div>
              <button>Acheter</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Offer;
