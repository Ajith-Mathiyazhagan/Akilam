import {useEffect,useState} from "react";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";
import { FaTint, FaHandHoldingHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import img1 from "../assets/blood/b (1).jpg";
import img54 from "../assets/blood/a (196).jpg";
import img2 from "../assets/blood/b (2).jpg";
import img3 from "../assets/blood/b (3).jpg";
import img4 from "../assets/blood/b (4).jpg";
import img5 from "../assets/blood/b (5).jpg";
import img6 from "../assets/blood/b (6).jpg";
import img7 from "../assets/blood/b (7).jpg";
import img8 from "../assets/blood/b (8).jpg";
import img9 from "../assets/blood/b (9).jpg";
import img10 from "../assets/blood/b (10).jpg";
import img11 from "../assets/blood/b (11).jpg";
import img12 from "../assets/blood/b (12).jpg";
import img13 from "../assets/blood/b (13).jpg";
import img14 from "../assets/blood/b (14).jpg";
import img15 from "../assets/blood/b (15).jpg";
import img16 from "../assets/blood/b (16).jpg";
import img17 from "../assets/blood/b (17).jpg";
import img18 from "../assets/blood/b (18).jpg";
import img19 from "../assets/blood/b (19).jpg";
import img20 from "../assets/blood/b (20).jpg";
import img21 from "../assets/blood/b (21).jpg";
import img22 from "../assets/blood/b (22).jpg";
import img23 from "../assets/blood/b (23).jpg";
import img24 from "../assets/blood/b (24).jpg";
import img25 from "../assets/blood/b (25).jpg";
import img26 from "../assets/blood/b (26).jpg";
import img27 from "../assets/blood/b (27).jpg";
import img28 from "../assets/blood/b (28).jpg";
import img29 from "../assets/blood/b (29).jpg";
import img30 from "../assets/blood/b (30).jpg";
import img31 from "../assets/blood/b (31).jpg";
import img32 from "../assets/blood/b (32).jpg";
import img33 from "../assets/blood/b (33).jpg";
import img34 from "../assets/blood/b (34).jpg";
import img35 from "../assets/blood/b (35).jpg";
import img36 from "../assets/blood/b (36).jpg";
import img37 from "../assets/blood/b (37).jpg";
import img38 from "../assets/blood/b (38).jpg";
import img39 from "../assets/blood/b (39).jpg";
import img40 from "../assets/blood/b (40).jpg";
import img41 from "../assets/blood/b (41).jpg";
import img42 from "../assets/blood/b (42).jpg";
import img43 from "../assets/blood/b (43).jpg";
import img44 from "../assets/blood/b (44).jpg";
import img45 from "../assets/blood/b (45).jpg";
import img46 from "../assets/blood/b (46).jpg";
import img47 from "../assets/blood/b (47).jpg";
import img48 from "../assets/blood/b (48).jpg";
import img49 from "../assets/blood/b (49).jpg";
import img50 from "../assets/blood/b (50).jpg";
import img51 from "../assets/blood/b (51).jpg";
import img52 from "../assets/blood/b (52).jpg";
import img53 from "../assets/blood/b (53).jpg";


const Blood = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  
    const settings = {
      dots:false,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2500,
      afterChange: (i) => setCurrentIndex(i + 1),
    };
  
    const images = [
     img53,img52,img54, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
  img51,  
  ];
  
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // 100ms delay
  }, []);
    const navigate = useNavigate();
  return (
    <div className="container">
      <div className="container text-center bg-white mt-3">
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
            <p className="fw-bold mx-auto text-center mb-0">உலகையே காப்போம்!</p>
            <img
              src={mt}
              alt="Anna"
              className="img-fluid br w-75 h-50  border-success rounded-circle"
            />
          </div>
        </div>
      </div>
 <h6 className=" mt-0 fw-bold blue text-center">
  பதிவு எண் : 587/2019
</h6>
      <h4 className=" text-center text-danger fw-bold">
        அகிலம் நண்பர்கள் அறக்கட்டளை
      </h4>

      <h6 className="text-center fw-light">
        உறவாய் இணைவோம் உதிரம் கொடுத்து பல உயிர்களை காப்போம் !{" "}
      </h6>
      <div className="container text-center col-12 col-md-6 py-2">
  {/* 🩸 Button 1: Blood Request */}
  <button onClick={()=>navigate("/Bd")} className="btn btn-danger  w-100 fw-bold rounded-3 mb-3 d-flex align-items-center justify-content-center mx-auto px-4  ">
    <FaTint className="fs-5 me-2" />
    குருதித் தேவைக்கு
  </button>

  {/* 🤝 Button 2: Become a Donor */}
  <button onClick={()=>navigate("/Bdoner")} className="btn btn-danger w-100  fw-bold rounded-3 mb-3 d-flex align-items-center justify-content-center mx-auto px-4  gap-2">
    <FaHandHoldingHeart className="fs-5 me-2" />
    கொடையாளர் பதிவு
  </button>
  <button onClick={()=>navigate("/BloodRequests")} className="btn btn-danger w-100  fw-bold rounded-3 mb-3 d-flex align-items-center justify-content-center mx-auto px-4  gap-2">
    <FaHandHoldingHeart className="fs-5 " />
    குருதி தேவை படுவோர்
  </button>
</div>

{/* img section */}
<div
  className="mx-auto"
  style={{
    width: "100%",
    maxWidth: "700px",        // desktop center width
    borderRadius: "12px",
    position: "relative",
  }}
>

      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "420px",
                borderRadius: "12px",
                objectFit:"fill",
              }}
            />
          </div>
        ))}
      </Slider>
 



      {/* 🔥 Bottom-right count */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "15px",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "18px",
          fontSize: "14px",
          fontWeight: "500",
        }}
      >
        {currentIndex} / {images.length}
      </div>
    </div>

<div className=" text-center mb-3">
  <iframe
  width="84%"
  height="220"
  src="https://www.youtube.com/embed/CPicUcQgq5I"
  title="Blood Donation Awareness Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

</div>






    </div>
  );
};

export default Blood;
