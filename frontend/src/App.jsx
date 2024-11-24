import { Route, Routes } from "react-router-dom";
import CareerForm from "./components/careerForm";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Roadmap from "./pages/Roadmap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<CareerForm />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
