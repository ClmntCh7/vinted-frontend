import "./App.css";
import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// Components
import Header from "./components/Header";
import Modal from "./components/Modal";

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

  const [errorMessage, setErrorMessage] = useState("");

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
              />
            }
          />
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
      </Router>
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
        />
      )}
    </div>
  );
}

export default App;
