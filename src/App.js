import React, { useState, useEffect } from "react";
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
 
 const [showCountdown, setShowCountdown] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Set your launch time (today 1:05 PM IST)
    const launchTime = new Date();
    

    launchTime.setHours(13, 5, 0, 0); // 1:05 PM  
   


    const timer = setInterval(() => {
      const now = new Date();
      const diff = launchTime - now;

      if (diff <= 0) {
        clearInterval(timer);
        setShowCountdown(false); // hide countdown after launch time
      } else {
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
        setTimeLeft(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        );
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (showCountdown) {
    return (
      <div className="countdown-screen ">
        <br></br>
        <br></br>
        <br></br>
        <h2 className=" text-center mt-5">
  அகிலம் நண்பர்கள் அறக்கட்டளை
</h2>
<h4 className="sub-tamil-title text-center">
  தமிழ்நாடு
</h4>
<p className="text-center ">உறவாய் இணைவோம் !  உலகையே காப்போம் !
</p>
<p className="text-center ">இன்று மதியம் <strong className="text-danger mx-1 fs-6"> 1.05 </strong>  மணி அளவில்  எங்களின்  புதிய  இணையதளம்  அதிகாரப்பூர்வமாக தொடங்கப்படுகிறது. அனைவரும் இணைந்து  இந்த மண்ணிற்காகவும் , மக்களுக்காகவும்  தொடர்ந்து  சமூகப்பணியில்  ஈடுபடுவோம் .</p>
        <h2 className="my-1 mb-3">{timeLeft}</h2>
        <h3 className="text-center h2 fw-bold">விரைவில் வெளியீடு 🚀</h3>
      </div>
    );
  }

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
