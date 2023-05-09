import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51N5pZPI44kWBayGvU4Vlml9i3uO4HHcdi1AR9oQGbMh0Pa9npMGaoks5rsTMKGiSn0AWWQB5ZCsX04kMFoT30pwJ00eb0vstsK"
);
const Payment = (username, setUsername) => {
  return (
    <div className="container">
      <Elements stripe={stripePromise}>
        <CheckoutForm username={username} setUsername={setUsername} />
      </Elements>
    </div>
  );
};

export default Payment;
