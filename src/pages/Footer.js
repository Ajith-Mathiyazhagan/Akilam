import React from "react";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const handleNavClick = useNavigate();
  return (
    
    <footer className="bg-dark text-white pt-4 ">
        
      <div className="container text-center text-md-left">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto ">
            <h5 className=" mb-2 font-weight-bold"><b>அகிலம் நண்பர்கள் அறக்கட்டளை</b></h5>
            <p className="mx-auto text-center">
             அன்றும் இன்றும் என்றும் இந்த மண்ணிற்காகவும், மக்களுக்காகவும் தொடர்ந்து சமூக பணியில் ஈடுபட்டு வருகிறது.
            </p>
            
          </div>

          {/* Links Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto text-center mb-2"> 
            <h5 className="text-uppercase mb-2 font-weight-bold">விரைவு இணைப்புகள்</h5>
              <div className="d-flex flex-column align-items-center">
               <button 
            className="btn btn-link text-white text-decoration-none d-flex align-items-center"
            onClick={() => handleNavClick("/")}
          >
            <i className="bi bi-person-badge-fill me-2 text-danger"></i> முகப்பு
          </button>

          <button 
            className="btn btn-link text-white text-decoration-none d-flex align-items-center"
            onClick={() => handleNavClick("/Founder")}
          >
            <i className="bi bi-hand-thumbs-up-fill me-2 text-danger"></i> நிறுவனர்  
          </button>

          <button 
            className="btn btn-link text-white text-decoration-none d-flex align-items-center"
            onClick={() => handleNavClick("/Login")}
          >
            <i className="bi bi-chat-dots-fill me-2 text-danger"></i> உள்நுழைக
          </button>

          <button 
            className="btn btn-link text-white text-decoration-none d-flex align-items-center"
            onClick={() => handleNavClick("/Join")}
          >
            <i className="bi bi-telephone-fill me-2 text-danger"></i> உறவாய் இனைய 
          </button>
          </div>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto ">
            <h5 className="text-uppercase mb-1 font-weight-bold">தொடர்பு</h5>
            <p className="mb-1 text-center"><i className="bi bi-geo-alt-fill me-2"></i> திருவண்ணாமலை, தமிழ்நாடு</p>
            <p className="mb-1 text-center"><i className="bi bi-envelope-fill me-2"></i> info@akilamnanbargalarakkattalai.com</p>
            <p className="mb-1 text-center"><i className="bi bi-telephone-fill me-2"></i> +91 83447 86851</p>
          </div>

        </div>
          <div className="col-md-5 col-lg-4 mt-2 mx-auto text-center">
  <div className="d-flex justify-content-center gap-3">
    <a href="https://www.facebook.com/profile.php?id=100054293239611" className="text-primary"><i className="bi bi-facebook"></i></a>
    <a href="https://www.instagram.com/akilamnanbarkal" className="text-danger"><i className="bi bi-instagram"></i></a>
    <a href="https://www.youtube.com/@%E0%AE%85%E0%AE%95%E0%AE%BF%E0%AE%B2%E0%AE%AE%E0%AF%8D%E0%AE%A8%E0%AE%A3%E0%AF%8D%E0%AE%AA%E0%AE%B0%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D%E0%AE%85%E0%AE%B1%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%B3%E0%AF%88" className="text-danger"><i className="bi bi-youtube"></i></a>
    
  </div>
</div>


        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="text-center mx-auto ">
            <p className="text-center text-md-left mx-auto small ">
              © {new Date().getFullYear()} அகிலம் நண்பர்கள் அறக்கட்டளை
              <p className="mt-2 mx-auto small text-center">
              Developed by <a className="text-white" href="https://ajnex.in"><b className="ajnex">AjNex Digital Solution </b></a>. All rights reserved.
            </p>
            </p>
          </div>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
