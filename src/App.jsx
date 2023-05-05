import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// Components
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [token, setToken] = useState("");
  const [visible, setVisible] = useState(false);
  const [modalToggle, setModalToggle] = useState(0);

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
        />

        <Routes>
          <Route
            path="/"
            element={<Home token={token} setToken={setToken} />}
          />
          <Route path="/offer/:id" element={<Offer />} />
        </Routes>
      </Router>
      {visible && (
        <Modal
          setVisible={setVisible}
          token={token}
          setToken={setToken}
          modalToggle={modalToggle}
          // setModalToggle={setModalToggle}
        />
      )}
    </div>
  );
}

export default App;
