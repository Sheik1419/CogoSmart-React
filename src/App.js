import { Route, Routes } from "react-router-dom";

// CSS
import "./App.css";
import "./components/common/common.css";
import "./components/common/style.css";
import "./components/common/button.css";
import "./components/common/modal.css";
import "./components/common/inputs.css";

// JSX
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

// Pages
import Home from "./components/homePage/Home.jsx";
import About from "./components/aboutUsPage/AboutUs.jsx";
import Contact from "./components/contactUsPage/ContactUs.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Checkout from "./components/pricing/Checkout.jsx";
import TermsAndCondition from "./components/policy/TermsAndCondition.jsx";
import PrivacyPolicy from "./components/policy/PrivacyPolicy.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
