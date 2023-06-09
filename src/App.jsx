import "./App.css";
import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cookies from "js-cookie";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Payment from "./pages/Payment";

// Components
import Header from "./components/Header";
import Modal from "./components/Modal";
import PublishOffer from "./pages/PublishOffer";

function App() {
  // States:
  const [token, setToken] = useState("");
  const [visible, setVisible] = useState(false);
  const [modalToggle, setModalToggle] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [filter, setFilter] = useState({ title: "", sort: "" });
  const [sort, setSort] = useState(false);
  const initialKeyword = useRef(keyword);
  const [values, setValues] = useState([10, 100]);
  const [finalPriceRange, setfinalPriceRange] = useState([10, 100]);
  const [errorMessage, setErrorMessage] = useState("");
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");

  // console.log(Cookies.get("token"));

  return (
    <div className="App">
      <Router>
        <Header
          token={token}
          setToken={setToken}
          visible={visible}
          setVisible={setVisible}
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          keyword={keyword}
          setKeyword={setKeyword}
          sort={sort}
          setSort={setSort}
          values={values}
          setValues={setValues}
          setfinalPriceRange={setfinalPriceRange}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                token={token}
                setToken={setToken}
                keyword={keyword}
                setErrorMessage={setErrorMessage}
                filter={filter}
                setFilter={setFilter}
                sort={sort}
                setSort={setSort}
                initialKeyword={initialKeyword}
                values={values}
                setValues={setValues}
                visible={visible}
                setVisible={setVisible}
                setModalToggle={setModalToggle}
                finalPriceRange={finalPriceRange}
              />
            }
          />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/offer/publish"
            element={
              <PublishOffer setErrorMessage={setErrorMessage} token={token} />
            }
          />
          <Route
            path="/offer/:id/payment"
            element={<Payment username={username} setUsername={setUsername} />}
          />
        </Routes>

        {visible && (
          <Modal
            setVisible={setVisible}
            visible={visible}
            token={token}
            setToken={setToken}
            modalToggle={modalToggle}
            setModalToggle={setModalToggle}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            avatar={avatar}
            setAvatar={setAvatar}
            username={username}
            setUsername={setUsername}
          />
        )}
      </Router>
    </div>
  );
}

export default App;
