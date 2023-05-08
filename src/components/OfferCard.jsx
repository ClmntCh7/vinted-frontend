import { Link } from "react-router-dom";

const OfferCard = ({ elem, account }) => {
  return (
    <Link to={`/offer/${elem._id}`}>
      <article className="OfferCard">
        <div className="OfferCard-header">
          <div>
            {account.avatar && <img src={account.avatar.secure_url} alt="" />}
          </div>
          <div>
            <span>{account.username}</span>
          </div>
        </div>
        <div className="OfferCard-pict">
          <img
            src={elem.product_image[0].secure_url}
            alt="product posted by users"
          />
        </div>
        <div className="OfferCard-details">
          <span>{elem.product_price}€</span>
          {elem.product_details.map((elem, index) => {
            return (
              <p key={elem._id}>
                <span>{elem.TAILLE}</span>
                <span>{elem.MARQUE}</span>
              </p>
            );
          })}
        </div>
      </article>
    </Link>
  );
};

export default OfferCard;
