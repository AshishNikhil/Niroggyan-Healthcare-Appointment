import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import DoctorProfile from "./components/DoctorProfile/DoctorProfile";
import { DoctorsProvider } from "./context/DoctorsContext.jsx";
import "./App.css";

function App() {
  return (
    <DoctorsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/:id" element={<DoctorProfile />} />
        </Routes>
      </Router>
    </DoctorsProvider>
  );
}

export default App;