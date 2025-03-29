import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";

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

// HomePage
import HomeBanner from "./components/homePage/HomeBanner.jsx";
import Choose from "./components/homePage/Choose.jsx";
import MainFeatures from "./components/homePage/MainFeatures.jsx";
import Government from "./components/homePage/Government.jsx";
import KeyFeatures from "./components/homePage/KeyFeatures.jsx";
import SubFeatures from "./components/homePage/SubFeatures.jsx";
import Download from "./components/homePage/Download.jsx";

// AboutUsPage
import AboutBanner from "./components/aboutUsPage/AboutBanner.jsx";
import AboutCards from "./components/aboutUsPage/AboutCard.jsx";

// ContactUsPage
import ContactBanner from "./components/contactUsPage/ContactUsBanner.jsx";
import ContactCards from "./components/contactUsPage/ContactCards.jsx";

// Pricing
import PricingBanner from "./components/pricing/PricingBanner.jsx";
import PricingCards from "./components/pricing/PricingCards.jsx";

// Checkout
import CheckoutBanner from "./components/pricing/CheckoutBanner.jsx";
import CheckoutCards from "./components/pricing/CheckoutCards.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <HomeBanner />
              <Choose />
              <MainFeatures />
              <Government />
              <KeyFeatures />
              <SubFeatures />
              <Download />
            </>
          }
        />

        {/* About Page Route */}
        <Route
          path="/about-us"
          element={
            <>
              <AboutBanner />
              <AboutCards />
            </>
          }
        />

        {/* Pricing Route */}
        <Route
          path="/pricing"
          element={
            <>
              <PricingBanner />
              <PricingCards />
            </>
          }
        />

        {/* Checkout Route */}
        <Route
          path="/checkout"
          element={
            <>
              <CheckoutBanner />
              <CheckoutCards />
            </>
          }
        />

        {/* Contact Us Route */}
        <Route
          path="/contact-us"
          element={
            <>
              <ContactBanner />
              <ContactCards />
            </>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
