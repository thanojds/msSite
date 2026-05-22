import Landing from "./components/Landing";
import AboutUs from "./components/pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

    </BrowserRouter>
  );
}