import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // 100ms delay
  }, []);

  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true); // track auth loading

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
        setLoading(false);
      } else {
        window.location.href = "/login"; // redirect if not logged in
      }
    });

    // cleanup
    return () => unsubscribe();
  }, []);

  const nav = useNavigate();

  if (loading) {
    return (
      <div className="container mt-5 mb-5  text-center">
        <h3>⌛ உங்கள் உள்நுழைவு சரிபார்க்கப்படுகிறது...</h3>
      </div>
    );
  }

  const handleLogout = () => {
    auth.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="container text-center">
      <div className="container text-center">
        <div className="row mt-3 text-center">
          <div className="col-3 col-md-3 col-lg-2">
            <p className="fw-bold mx-auto text-center mb-0">உறவாய் இணைவோம்!</p>
            <img
              src={na}
              alt="Anna"
              className="img-fluid br w-75 h-50  border-success rounded-circle"
            />
          </div>

          <div className="col-1 col-md-1 col-lg-2"></div>

          <div className="col-4 col-md-4 col-lg-4">
            <p className="fw-bold h2 mx-auto text-center mb-0 ">அ</p>
            <img src={logo} alt="Logo" className="img-fluid logo-img mb-0" />
          </div>

          <div className="col-1 col-md-1 col-lg-2"></div>

          <div className="col-3 col-md-3 mb-6 col-lg-2 mx-auto">
            <p className="fw-bold mx-auto text-center mb-0">உலகை காப்போம்!</p>
            <img
              src={mt}
              alt="Anna"
              className="img-fluid br w-75 h-50  border-success rounded-circle"
            />
          </div>
        </div>
        <h2 className="main-tamil-title text-center mt-2">
          அகிலம் நண்பர்கள் அறக்கட்டளை
        </h2>
        <h4 className="sub-tamil-title text-center">தமிழ்நாடு</h4>
        <h4 className="text-primary mt-3">
          {" "}
          <span className="fs-6 text-dark"> வணக்கம்</span> {username}
          <span className="fs-6 text-dark"> உங்களை வரவேற்கிறோம்! </span>{" "}
        </h4>
        <div className="row g-3 mt-2">
          {/* Our Team List */}
          <div className="col-12 col-md-6 my-2">
            <div className="card shadow h-100">
              <div className="card-header bg-primary text-white">
                அகிலம் உறுப்பினர்களை பார்க்க
              </div>
              <div className="card-body">
                <p className="text-center fw-bold">
                  உறவாய் இணைவோம்! உலகை காப்போம்!
                </p>
                <button
                  onClick={() => nav("/NewRegistersPage")}
                  className="btn btn-secondary d-flex align-items-center mx-auto text-center"
                >
                  <i className="bi bi-people-fill me-2"></i> {/* Left icon */}
                  உறுப்பினர்கள்
                </button>
              </div>
            </div>
          </div>

          {/* Blood Donors List */}
          <div className="col-12 col-md-6 my-2">
            <div className="card shadow h-100">
              <div className="card-header bg-primary text-white">
                குருதிக்கொடையாளர்களை பார்க்க
              </div>
              <div className="card-body">
                <p className="text-center fw-bold ">
                  {" "}
                  உறவாய் இணைவோம்! உதிரம் கொடுத்து பல உயிர்களை காப்போம்!{" "}
                </p>
                <button
                  onClick={() => nav("/DonorList")}
                  className="btn btn-danger d-flex align-items-center mx-auto text-center"
                >
                  <i className="bi bi-droplet-fill me-2"></i> {/* Left icon */}
                  குருதிக்கொடையாளர்கள்
                </button>
              </div>
            </div>
          </div>

          {/* Blood Donors List */}
          <div className="col-12 col-md-6 my-2">
            <div className="card shadow h-100">
              <div className="card-header bg-primary text-white">
                தலைமை உறுப்பினர்கள் பதிவு
              </div>
              <div className="card-body">
                <p className="text-center fw-bold text-dark">
                  {" "}
                  அகிலம் நண்பர்ககளின் தலைமை உறுப்பினர்கள் பதிவு
                </p>
                <button
                  onClick={() => nav("/Lregister")}
                  className="btn btn-success d-flex align-items-center mx-auto text-center"
                >
                  <i className="bi bi-person-fill me-2"></i> {/* Left icon */}
                  உறுப்பினர்கள் பதிவு
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 my-2">
            <div className="card shadow h-100">
              <div className="card-header bg-primary text-white">
                தலைமை உறுப்பினர்கள் தகவல்
              </div>
              <div className="card-body">
                <p className="text-center fw-bold text-dark">
                  {" "}
                  அகிலம் நண்பர்ககளின் தலைமை உறுப்பினர்கள் பதிவுகளின் தகவல்
                </p>
                <button
                  onClick={() => nav("/Userlist")}
                  className="btn btn-warning text-white d-flex align-items-center mx-auto text-center"
                >
                  <i className="bi bi-person-fill me-2"></i> {/* Left icon */}
                  உறுப்பினர்கள் தகவல்
                </button>
              </div>
            </div>
          </div>
          <button
            className="btn btn-danger w-50 mx-auto mb-3"
            onClick={handleLogout}
          >
            வெளியேறு
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
