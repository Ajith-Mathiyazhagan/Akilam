import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Seyalthitam from "./pages/Seyalthitam";
import Blood from "./pages/Blood";
import Bd from "./pages/Bd";
import Bdoner from "./pages/Bdoner";
import Bneedf from "./pages/Bneedf";
import BloodRequestsPage from "./pages/BloodRequestsPage";
import DonorListPage from "./pages/DonorListPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/Seyalthitam" element={<Seyalthitam />}></Route>
        <Route path="/Blood" element={<Blood />}></Route>
        <Route path="/Bd" element={<Bd />}></Route>
        <Route path="/Bdoner" element={<Bdoner />}></Route>
        <Route path="/Bneedf" element={<Bneedf />}></Route>
        <Route path="/BloodRequests" element={<BloodRequestsPage />}></Route>
        <Route path="/DonorList" element={<DonorListPage />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
