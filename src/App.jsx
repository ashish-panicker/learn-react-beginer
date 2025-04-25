import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./pages/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-full shadow">
        <Home />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
