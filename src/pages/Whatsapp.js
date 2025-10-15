import {useEffect} from "react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";

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
             <h4 className=" text-center text-danger fw-bold">
        அகிலம் நண்பர்கள் அறக்கட்டளை
      </h4>

      <p className="text-center h6 text-primary fw-light">
        உறவாய் இணைவோம்! உலகை காப்போம்!
      </p>
     
      <p className="fs-6 mb-3 text-center">
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
