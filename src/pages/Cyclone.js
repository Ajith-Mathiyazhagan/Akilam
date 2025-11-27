import {useEffect,useState} from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/cyclone/c (1).jpg";
import img55 from "../assets/cyclone/c (55).jpg";
import img56 from "../assets/cyclone/c (56).jpg";
import img57 from "../assets/cyclone/c (57).jpg";
import img58 from "../assets/cyclone/c (58).jpg";
import img59 from "../assets/cyclone/c (59).jpg";
import img60 from "../assets/cyclone/c (60).jpg";
import img61 from "../assets/cyclone/c (61).jpg";
import img62 from "../assets/cyclone/c (62).jpg";
import img63 from "../assets/cyclone/c (63).jpg";
import img64 from "../assets/cyclone/c (64).jpg";
import img65 from "../assets/cyclone/c (65).jpg";
import img66 from "../assets/cyclone/c (66).jpg";
import img67 from "../assets/cyclone/c (67).jpg";
import img68 from "../assets/cyclone/c (68).jpg";
import img69 from "../assets/cyclone/c (69).jpg";
import img70 from "../assets/cyclone/c (70).jpg";
import img71 from "../assets/cyclone/c (71).jpg";
import img72 from "../assets/cyclone/c (72).jpg";
import img73 from "../assets/cyclone/c (73).jpg";
import img74 from "../assets/cyclone/c (74).jpg";
import img75 from "../assets/cyclone/c (75).jpg";
import img76 from "../assets/cyclone/c (76).jpg";
import img77 from "../assets/cyclone/c (77).jpg";
import img78 from "../assets/cyclone/c (78).jpg";
import img79 from "../assets/cyclone/c (79).jpg";
import img80 from "../assets/cyclone/c (80).jpg";
import img81 from "../assets/cyclone/c (81).jpg";
import img82 from "../assets/cyclone/c (82).jpg";
import img83 from "../assets/cyclone/c (83).jpg";
import img84 from "../assets/cyclone/c (84).jpg";
import img85 from "../assets/cyclone/c (85).jpg";
import img86 from "../assets/cyclone/c (86).jpg";
import img87 from "../assets/cyclone/c (87).jpg";
import img88 from "../assets/cyclone/c (88).jpg";
import img89 from "../assets/cyclone/c (89).jpg";
import img90 from "../assets/cyclone/c (90).jpg";
import img91 from "../assets/cyclone/c (91).jpg";
import img92 from "../assets/cyclone/c (92).jpg";
import img93 from "../assets/cyclone/c (93).jpg";
import img94 from "../assets/cyclone/c (94).jpg";
import img95 from "../assets/cyclone/c (95).jpg";
import img96 from "../assets/cyclone/c (96).jpg";
import img97 from "../assets/cyclone/c (97).jpg";
import img98 from "../assets/cyclone/c (98).jpg";
import img99 from "../assets/cyclone/c (99).jpg";
import img100 from "../assets/cyclone/c (100).jpg";
import img101 from "../assets/cyclone/c (101).jpg";
import img102 from "../assets/cyclone/c (102).jpg";
import img103 from "../assets/cyclone/c (103).jpg";
import img104 from "../assets/cyclone/c (104).jpg";
import img105 from "../assets/cyclone/c (105).jpg";
import img106 from "../assets/cyclone/c (106).jpg";
import img107 from "../assets/cyclone/c (107).jpg";
import img108 from "../assets/cyclone/c (108).jpg";
import img109 from "../assets/cyclone/c (109).jpg";
import img110 from "../assets/cyclone/c (110).jpg";
import img111 from "../assets/cyclone/c (111).jpg";
import img112 from "../assets/cyclone/c (112).jpg";
import img113 from "../assets/cyclone/c (113).jpg";
import img114 from "../assets/cyclone/c (114).jpg";
import img115 from "../assets/cyclone/c (115).jpg";
import img116 from "../assets/cyclone/c (116).jpg";
import img117 from "../assets/cyclone/c (117).jpg";




 const baseNumber = "918344786851";

  // Message combining all help options
  const message = encodeURIComponent(
    "🌸 வணக்கம்! 🌸 நான் அகிலம் நண்பர்கள் அறக்கட்டளை பற்றி உங்களுடன் பேச விரும்புகிறேன் 🤝✨ " 
  );

  const waLink = `https://wa.me/${baseNumber}?text=${message}`;


const Cyclone = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // 100ms delay
  }, []);
  
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
   
  img101, img102, img103, img97, img100,img1, img55, img56, img57, img58, img59, img60,
  img61, img62, img63, img64, img65, img66, img67, img68, img69, img70,
  img71, img72, img73,img99, img74, img75, img76, img77, img78, img79, img80,
  img81, img82, img83, img84, img85, img86, img87, img88, img89, img90,
  img91, img92, img93, img94, img95, img96, img98, img104, img105, img106, img107, img108, img109, img110,
  img111, img112, img113, img114, img115, img116, img117
];


  return (
    <div className="container text-center">
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

      <p className="text-center h6 text-primary fw-light">
        உறவாய் இணைவோம்! உலகை காப்போம்!
      </p>
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
      <p className="fs-6 mb-3 mt-4 text-center">
       அன்றும் இன்றும் என்றும் இந்த மண்ணிற்காகவும், மக்களுக்காகவும் தொடர்ந்து சமூக பணியில் ஈடுபட்டு வருகிறது. நமது அமைப்போடு இணைந்து நீங்களும் சமூக மாற்றத்திற்காக செயல்படலாம் ,அல்லது உங்களை சார்ந்த ஏழை எளியோருக்கான  உதவி பெறலாம்!
      
      </p>
      
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success btn-lg d-inline-flex align-items-center justify-content-center gap-2 mb-3"
      >
        <FaWhatsapp size={24} />WhatsApp மூலம் இணைய
      </a>
    </div>
  );
};

export default Cyclone;
