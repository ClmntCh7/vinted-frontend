import axios from "axios";
import { useState } from "react";
import handleErrors from "../utils/handleErrors";
import { useNavigate } from "react-router-dom";

const PublishOffer = ({ setErrorMessage, token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();
  const [picture, setPicture] = useState();
  const navigate = useNavigate();

  const postOffer = async (e) => {
    try {
      e.preventDefault();
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("product_name", title);
      formData.append("product_description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("condition", condition);
      formData.append("color", color);
      formData.append("city_location", location);
      formData.append("product_price", price);
      const response = await axios.post(
        "https://site--vinted-backend--m4snx7ydrpgs.code.run/offer/publish",
        formData,
        config
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      handleErrors(error, setErrorMessage);
    }
  };

  return (
    <div className="container">
      <div className=".Form-container">
        <h1>Vends ton article</h1>
        <form className="Form-submitOffer" onSubmit={postOffer}>
          <div>
            <input
              type="file"
              onChange={(e) => {
                setPicture(e.target.files[0]);
              }}
            />
          </div>
          <div>
            <label htmlFor="title">
              Titre
              <input
                id="title"
                type="text"
                placeholder="ex: Chemise Sezanne verte"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </label>
            <label htmlFor="description">
              Décris ton article
              <textarea
                id="description"
                placeholder="ex: Porté quelques fois, taille correctement"
                rows="5"
                cols="33"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </label>
          </div>
          <div>
            <label htmlFor="brand">
              Marque
              <input
                id="brand"
                type="text"
                placeholder="ex: Zara"
                value={brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
              />
            </label>
            <label htmlFor="size">
              Taille
              <input
                id="size"
                type="text"
                placeholder="ex: L / 40 / 42"
                value={size}
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
            </label>
            <label htmlFor="color">
              Couleur
              <input
                id="color"
                type="text"
                placeholder="ex: Fushia"
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />
            </label>
            <label htmlFor="condition">
              Etat
              <input
                id="condition"
                type="text"
                placeholder="ex: Neuf avec l'étiquette"
                value={condition}
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
              />
            </label>
            <label htmlFor="location">
              Lieu
              <input
                id="location"
                type="text"
                placeholder="ex: Paris"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="price">
              Prix
              <input
                id="price"
                type="number"
                placeholder="0,00€"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </label>
          </div>
          <input type="submit" value="Poster une offre" />
        </form>
      </div>
    </div>
  );
};

export default PublishOffer;
