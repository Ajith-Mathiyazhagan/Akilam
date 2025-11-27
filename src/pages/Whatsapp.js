import {useEffect,useState} from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/adharavatror/a (1).jpg";
import img2 from "../assets/adharavatror/a (2).jpg";
import img3 from "../assets/adharavatror/a (3).jpg";
import img4 from "../assets/adharavatror/a (4).jpg";
import img5 from "../assets/adharavatror/a (5).jpg";
import img6 from "../assets/adharavatror/a (6).jpg";
import img7 from "../assets/adharavatror/a (7).jpg";
import img8 from "../assets/adharavatror/a (8).jpg";
import img9 from "../assets/adharavatror/a (9).jpg";
import img10 from "../assets/adharavatror/a (10).jpg";
import img11 from "../assets/adharavatror/a (11).jpg";
import img12 from "../assets/adharavatror/a (12).jpg";
import img13 from "../assets/adharavatror/a (13).jpg";
import img14 from "../assets/adharavatror/a (14).jpg";
import img15 from "../assets/adharavatror/a (15).jpg";
import img16 from "../assets/adharavatror/a (16).jpg";
import img17 from "../assets/adharavatror/a (17).jpg";
import img18 from "../assets/adharavatror/a (18).jpg";
import img19 from "../assets/adharavatror/a (19).jpg";
import img20 from "../assets/adharavatror/a (20).jpg";
import img21 from "../assets/adharavatror/a (21).jpg";
import img22 from "../assets/adharavatror/a (22).jpg";
import img23 from "../assets/adharavatror/a (23).jpg";




 const baseNumber = "918344786851";

  // Message combining all help options
  const message = encodeURIComponent(
    "🌸 வணக்கம்! 🌸 நான் அகிலம் நண்பர்கள் அறக்கட்டளை பற்றி உங்களுடன் பேச விரும்புகிறேன் 🤝✨ " 
  );

  const waLink = `https://wa.me/${baseNumber}?text=${message}`;


const WhatsApp = () => {
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
    img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23,img1, img2, img3,img4,
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
        <p className="text-center fw-bold">ஆதரவற்றோர் (ம) முதியோர் மீட்பு திட்டம்</p>
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

export default WhatsApp;
