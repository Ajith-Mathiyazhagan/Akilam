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
import Footer from "./pages/Footer";
import Img from "./pages/Img";
import Count from "./pages/Count";
import Join from "./pages/Join";
import NewRegistersPage from "./pages/NewRegistersPage";
import Whatsapp from "./pages/Whatsapp";
import About from "./pages/About";
import Founder from "./pages/Founder";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashbord";
import Lregister from "./pages/Lregister";
import ProtectedRoute from "./components/ProtectedRoute";
import UserList from "./pages/UserList";

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
        <Route path="/Footer" element={<Footer />}></Route>
        <Route path="/Img" element={<Img />}></Route>
        <Route path="/Count" element={<Count />}></Route>
        <Route path="/Join" element={<Join />}></Route>
        <Route
          path="/NewRegistersPage"
          element={
            <ProtectedRoute>
              <NewRegistersPage />
            </ProtectedRoute>
          }
        />{" "}
        <Route
          path="/Lregister"
          element={
            <ProtectedRoute>
              <Lregister />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Userlist"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route path="/Whatsapp" element={<Whatsapp />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Founder" element={<Founder />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Dashbord" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
