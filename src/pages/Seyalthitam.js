import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHandHoldingHeart,
  FaBookOpen,
  FaTools,
  FaLeaf,
  FaHandshake,
  FaSchool,
  FaUserTie,
  FaHandsHelping,
  FaLightbulb,
  FaWater,
} from "react-icons/fa";


const Seyalthitam = () => {
  const navigate = useNavigate();

  const projectList = [
    // 🩸 Blood Donation (Bootstrap Icon)
    { icon: <i className="bi bi-droplet-fill me-2"></i>, title: "இலவச குருதிக்கொடை திட்டம்", color: "danger", path: "/blood" },

   
    { icon: <FaHandHoldingHeart />, title: "ஆதரவற்றோர் (ம) முதியோர் மீட்பு திட்டம்", color: "primary", path: "/elderly-care" },
    { icon: <FaBookOpen />, title: "ஏழை எளிய மாணவ மாணவியரின் இலவச கல்வி உதவி திட்டம்", color: "success", path: "/education-help" },
    { icon: <FaTools />, title: "இலவச சுயதொழில் (ம) வேலைவாய்ப்பு பயிற்சி  திட்டம்", color: "warning", path: "/employment-support" },
    { icon: <FaLeaf />, title: "இயற்கை விவசாய திட்டம்", color: "success", path: "/organic-farming" },
    { icon: <FaWater />, title: "இயற்கை நீர் நிலைகள் பாதுகாப்பு திட்டம்", color: "info", path: "/water-conservation" },
    { icon: <FaSchool />, title: "இலவச இரவு பாட சாலை திட்டம்", color: "secondary", path: "/night-school" },
    { icon: <FaUserTie />, title: "அரசு வேலைவாய்ப்பு பயிற்சி திட்டம்", color: "primary", path: "/govt-training" },
    { icon: <FaHandsHelping />, title: "இயற்கை பேரிடர் மீட்பு பணிகள் திட்டம்", color: "danger", path: "/disaster-relief" },
    { icon: <FaLightbulb />, title: "கல்வி, தொழில் (ம) சமூக விழிப்புணர்வு திட்டம்", color: "warning", path: "/awareness" },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="row text-center mt-3">
        <div className="col-8">
          <p className="h4 fw-bold mb-0 text-start  ms-2">செயல்திட்டம் :</p>
        </div>
      </div>

      <div className="p-1">
        {projectList.map((item, index) => (
          <button
            key={index}
            className={`btn btn-${item.color} p-2 m-1 w-100 gap-2 shadow-sm fw-bold text-white tamil-btn`}
            onClick={() => handleClick(item.path)}
          >
            <p className="m-1 h6 text-start">
              {item.icon} {item.title}
            </p>
          </button>
        ))}
      </div>

      <p className="text-center m-2 h6 fw-bold p-1 text-success">
        நீ பிறந்த பலனை அடைய வேண்டும் என்றால் பிறருக்கு உதவி செய் .
      </p>

      {/* “Join with us” button */}
      <button
        onClick={() => navigate("/Join")}
        className="btn btn-danger fw-bold rounded-3 mb-3 d-flex align-items-center justify-content-center mx-auto px-4 py-2 gap-2"
      >
        <FaHandshake className="fs-5 " />
        உறவாய் இணைய
      </button>
      
    </div>
  );
};

export default Seyalthitam;
