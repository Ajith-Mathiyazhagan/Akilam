import React from "react";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";
import { FaTint, FaHandHoldingHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Bd = () => {
  const navigate = useNavigate();   
  return (
    <div className="container">
      <div className="container text-center bg-white mt-2 ">
        <div className="row  ">
          <div className="col-3 col-md-3  col-lg-2">
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
      </div>

      <h4 className=" text-center text-danger fw-bold">
        அகிலம் நண்பர்கள் அறக்கட்டளை
      </h4>

      <h6 className="text-center fw-light">
        உறவாய் இணைவோம் உதிரம் கொடுத்து பல உயிர்களை காப்போம் !{" "}
      </h6>
      <div className="container text-center py-2">
  {/* 🩸 Button 1: Blood Request */}
  <button onClick={()=>navigate("/Bneedf")} className="btn btn-danger  w-100 fw-bold rounded-3 mb-3 d-flex align-items-center justify-content-center mx-auto px-4  ">
    <FaTint className="fs-5 me-2" />
    குருதிக்காண பதிவு 
  </button>

  {/* 🤝 Button 2: Become a Donor */}
  <button onClick={()=>navigate("/DonorList")} className="btn btn-danger w-100  fw-bold rounded-3 mb-3 d-flex align-items-center justify-content-center mx-auto px-4  gap-2">
    <FaHandHoldingHeart className="fs-5 " />
    குருதிக்கொடையாளர்களை தேட ..
  </button>
</div>






    </div>
  );
};

export default Bd;
