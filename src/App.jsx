import Home from "./Pages/Home";
import About from "./Pages/About";
import Packages from "./Pages/Packages";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
