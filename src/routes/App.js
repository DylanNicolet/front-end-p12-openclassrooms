import "../sass/App.css";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Profile from "../routes/Profile.jsx";

function App() {
  return (
    <main>
      <Header />
      <section className="main__content">
        <Footer />
        <Profile />
      </section>
    </main>
  );
}

export default App;