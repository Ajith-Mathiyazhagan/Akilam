import {useEffect} from "react";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";
import Seyalthitam from "./Seyalthitam";
import Count from "./Count";
import Img from "../pages/Img"


const Home = () => {
useEffect(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100); // 100ms delay
}, []);

  return (
    <div className=" text-center">
      <div className="text-center container">

      
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
          <img
            src={logo}
            alt="Logo"
            className="img-fluid logo-img mb-0"
          />
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
      <h6 className=" mt-0 fw-bold blue text-center">
  பதிவு எண் : 587/2019
</h6>
   <h2 className="main-tamil-title text-center mt-2">
  அகிலம் நண்பர்கள் அறக்கட்டளை
</h2>
<h4 className="sub-tamil-title text-center">
  தமிழ்நாடு
</h4>


<Seyalthitam/>
<Count/>
</div>
<Img/>
    </div>
  );
};

export default Home;
