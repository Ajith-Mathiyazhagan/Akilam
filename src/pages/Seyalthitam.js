import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHandHoldingHeart,
  FaBookOpen,
  FaTools,
  FaHandshake,
  FaSchool,
  FaHandsHelping,
  FaLightbulb,
  FaWater,
  FaHandHoldingMedical
} from "react-icons/fa";

const Seyalthitam = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const projectList = [
    // 🩸 Blood Donation (Bootstrap Icon)
    {
      icon: <i className="bi bi-droplet-fill "></i>,
      title: "இலவச குருதிக்கொடை திட்டம்",
      color: "danger",
      path: "/blood",
    },
    {
      icon: <FaHandHoldingHeart /> ,
      title: "சாலையோர ஆதரவற்றோருக்கான தினசரி உணவு வழங்கும் திட்டம்",
      color: "primary",
      path: "/Whatsapp",
    },

    {
      icon:<FaHandHoldingMedical/>,
      title: "ஆதரவற்றோர் (ம) முதியோர் மீட்பு திட்டம்",
      color: "secondary",
      path: "/Whatsapp",
    },
    {
      icon: <FaBookOpen />,
      title: "ஏழை எளிய மாணவ மாணவியரின் இலவச கல்வி உதவி திட்டம்",
      color: "success",
      path: "/Whatsapp",
    },
    {
      icon: <FaTools />,
      title: "இலவச சுயதொழில் (ம) அரசு வேலைவாய்ப்பு பயிற்சி  திட்டம்",
      color: "warning",
      path: "/Whatsapp",
    },
    {
      icon: <FaWater />,
      title: "இயற்கை விவசாயம் (ம) நீர் நிலைகள் பாதுகாப்பு திட்டம் ",
      color: "info",
      path: "/Whatsapp",
    },
    {
      icon: <FaSchool />,
      title: "இலவச இரவு பாட சாலை திட்டம்",
      color: "secondary",
      path: "/Whatsapp",
    },

    {
      icon: <FaHandsHelping />,
      title: "இயற்கை பேரிடர் மீட்பு பணிகள் திட்டம்",
      color: "danger",
      path: "/Whatsapp",
    },
    {
      icon: <FaLightbulb />,
      title: "கல்வி, தொழில் (ம) சமூக விழிப்புணர்வு திட்டம்",
      color: "warning",
      path: "/Whatsapp",
    },
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div className="row text-center mt-3">
        <div className="col-12">
          <p className="h4 fw-bold mb-0 text-start  ms-2">செயல்திட்டங்கள் :</p>
        </div>
      </div>

      <div className="p-1">
        {projectList.map((item, index) => (
          <button
            key={index}
            className={`btn btn-${item.color} p-2 m-1 w-100 d-flex align-items-center gap-2 shadow-sm fw-bold text-white tamil-btn`}
            onClick={() => handleClick(item.path)}
          >
            {/* Icon on the left */}
            <span className="fs-5">{item.icon}</span>
            {/* Text on the right */}
            <span className="text-start flex-grow-1 ">{item.title}</span>
          </button>
        ))}
      </div>

      <p className="text-center m-2 h6 fw-bold p-1 text-success">
        நீ பிறந்த பலனை அடைய வேண்டும் என்றால் பிறருக்கு உதவி செய்
      </p>

      {/* “Join with us” button */}
      <button
        onClick={() => navigate("/Join")}
        className="btn btn-danger fw-bold rounded-3 mb-3 d-flex align-items-center justify-content-center mx-auto px-4 py-2 gap-2"
      >
        <FaHandshake className="fs-5 " />
        உறவாய் இணைய
      </button>
      <p className="text-primary text-center fw-bold mb-2">
        அர்ப்பணிப்பு இல்லாமல் <br></br>உங்கள் வாழ்க்கை அர்த்தமாகாது
      </p>
      {/* <p className="fw-bold text-end">- தே.அரி அகிலன் </p> */}
    </div>
  );
};

export default Seyalthitam;
