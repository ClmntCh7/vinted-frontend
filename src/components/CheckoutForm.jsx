import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useLocation } from "react-router-dom";

const CheckoutForm = (username, setUsername) => {
  const location = useLocation();

  const { title, amount, id } = location.state;
  const stripe = useStripe();
  const elements = useElements();

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // On récupère ici les données bancaires que l'utilisateur rentre
      const cardElement = elements.getElement(CardElement);

      // Demande de création d'un token via l'API Stripe
      // On envoie les données bancaires dans la requête
      const stripeResponse = await stripe.createToken(cardElement, {
        name: username,
      });
      console.log(stripeResponse);
      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        // "https://lereacteur-vinted-api.herokuapp.com/payment",
        "",
        {
          token: stripeToken,
          offerId: id,
          title: title,
          amount: amount,
        }
      );
      console.log(response.data);
      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <span>Résumé de la commande</span>
          <div>
            <div>
              <span>Commande</span>
              <span>{amount}</span>
            </div>
            <div>
              <span>Frais de protection acheteurs</span>
              <span>0.10</span>
            </div>
            <div>
              <span>Frais de port</span>
              <span>0.20</span>
            </div>
          </div>
          <div>
            <div>
              <span>Total</span>
              <span>{amount}</span>
            </div>
            <p></p>
          </div>
          <CardElement />
          <button type="submit">Valider</button>
        </form>
      ) : (
        <span>Paiement effectué ! </span>
      )}
    </div>
  );
};

export default CheckoutForm;
