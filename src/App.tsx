import Landing from "./components/Landing";
import AboutUs from "./components/pages/AboutUs";
import Services from "./components/pages/ServicesPage";
import ContactPage from "./components/pages/ContactPage";
import Events from "./components/pages/Events";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

    </BrowserRouter>
  );
}