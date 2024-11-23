import { Route, Routes } from "react-router-dom";
import CareerForm from "./components/careerForm";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<CareerForm />} />
      </Routes>
    </>
  );
}

export default App;
