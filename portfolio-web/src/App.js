import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import routes from "./routes";
import './styles/styles.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={routes.home.path} element={<Home />} />
        <Route path={routes.portfolio.path} element={<Portfolio />} />
        {/* Add other routes dynamically */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
