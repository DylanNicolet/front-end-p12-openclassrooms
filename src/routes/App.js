import "../sass/App.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Profile from "../routes/Profile.jsx";
import React from "react";
import Api from "../api/Api.jsx";
import { Outlet, useParams } from "react-router-dom";


function App() {

  return (
    <main>
      <Header />
      <section className="main__content">
        <Footer />
        <Outlet />
      </section>
    </main>
  );
}

export default App;