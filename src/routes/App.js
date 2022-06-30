import "../sass/App.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import React from "react";
import { Outlet } from "react-router-dom";


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