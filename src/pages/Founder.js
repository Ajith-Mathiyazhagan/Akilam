import React, { useEffect } from "react";
import annan from "../assets/founder.JPG";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Founder = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="container my-2">
      {/* Founder Section */}
      <div
        className="row g-0 bg-light shadow-lg"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          minHeight: "400px",
        }}
      >
        {/* Left Side Image */}
        <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center p-3">
          <img
            src={annan}
            alt="Founder"
            className="img-fluid rounded-circle shadow-lg mt-0"
            style={{
              width: "250px",
              height: "250px",
              objectFit: "cover",
              border: "5px solid white",
            }}
          />
        </div>

        {/* Right Side Content */}
        <div className="col-lg-8 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center text-center ">
          <h2
            className="fw-bold text-danger mt-0"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.2)" }}
          >
            தே.அரி அகிலன் <span className="fs-6 text-primary">ATS</span>
          </h2>
          <h6 className="text-dark mb-2">நிறுவன தலைவர்</h6>
          <h6 className="fw-bold mb-1 fmain-tamil-title text-success">
            அகிலம் நண்பர்கள் அறக்கட்டளை
          </h6>
          <p className="text-secondary text-danger fw-bold fs-6">தமிழ்நாடு</p>
        </div>
      </div>

      {/* Biography Section */}
      <div className="text-center mx-auto d-flex flex-column justify-content-center align-items-center text-center mb-3 p-3 shadow bg-white rounded-4 mt-4">
        <label className="fw-bold text-center mb-1">
          திரு தே.அரி அகிலன் அவர்களின் வாழ்க்கைப் பயணம் & சமூக சேவைகள்
        </label>

        <p className="fw-bold text-center mb-2 text-success">
          உறவாய் இணைவோம்! உலகையே  காப்போம்!!
        </p>

        <p className="mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          🏙️ <strong>சென்னை ஈக்காட்டுத்தாங்கலில்</strong> உள்ள<strong className="text-primary"> DR.G.சக்திவேல்</strong>  அவர்களுடைய  பிரபலமான ரியல்
          எஸ்டேட் நிறுவனமான <strong> SSLF City & Housing </strong> யின் <strong> (President)  </strong> மற்றும்
          <strong> அகிலம் நண்பர்கள் அறக்கட்டளையின் நிறுவனரும்</strong> ஆகிய{" "}
          <strong>திரு தே.அரி அகிலன் ATS</strong> அவர்கள், சென்னை மற்றும் அதை
          சுற்றியுள்ள பல்வேறு மாவட்டங்களில் உள்ள தன்னார்வலர்களை ஒருங்கிணைத்து{" "}
          <strong>அகிலம் நண்பர்கள் அறக்கட்டளை</strong> என்ற அமைப்பை உருவாக்கி,
          அதன் மூலம் உணவின்றி தவிக்கும் ஏழை மக்களுக்கு தொடர்ந்து உணவு அளித்து
          வருகிறார்.
        </p>

        <p className="mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          👨‍🌾 <strong>அகிலம் நண்பர்கள் அறக்கட்டளையின் நிறுவனத் தலைவர்</strong>{" "}
          திரு தே.அரி அகிலன் அவர்கள், திருவண்ணாமலை மாவட்டம் பறையம்பட்டு
          கிராமத்தில் வசிக்கும் விவசாய கூலித்தொழிலாளியான{" "}
          <strong>மு.தேவராஜ்</strong> மற்றும் <strong>அம்சா</strong> இவர்களின்
          மூத்த மகனாக பிறந்தார்.
        </p>

        <p className="mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          📚 அவர் தன் சொந்த ஊரான பறையம்பட்டு கிராமத்தில் ஆரம்பம் தொடக்கப்
          பள்ளியில் ஒன்று முதல் ஐந்தாம் வகுப்பு வரை படித்துவிட்டு, தனது
          கிராமத்திலிருந்து ஐந்து கிலோமீட்டர் தொலைவில் இருக்கும் தச்சம்பட்டு
          கிராமத்தில் உள்ள அரசினர் மேல்நிலைப் பள்ளியில் ஆறு முதல் பன்னிரண்டாம்
          வகுப்பு வரை அரசு மாணவர் விடுதியில் தங்கி படித்து வந்தார்.
        </p>

        <p className="mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          💪 குடும்ப வறுமையின் காரணமாக தன் பிறந்த ஊரை விட்டு 2009 ஆம் ஆண்டு{" "}
          <strong>₹100 பணத்தோடு</strong> வேலை தேடி சென்னைக்கு வந்து சேர்ந்தார்.
          சென்னையில் யாரையும் தெரியாத நிலையில் 
கோயம்பேடு பேருந்து நிலையத்தில் தஞ்சமடைந்தார்.
          சுமார் ஆறு மாத காலமாக கோயம்பேடு  காய்கறி (மார்க்கெட்) சந்தையில் கிடைத்த வேலையை செய்துவந்தார்.
அப்பொழுது கழிவுநீர் சுத்திகரிப்பு லாரி ஓட்டுநர் சேகர் என்ற நபரிடம் அறிமுகம் ஆகிறார் சில நாட்கள் கடந்து  அவருடன் இணைந்து லாரி உதவியாளராக (கிலிநர் ) மற்றும் (டிரைனேஜ்) சாக்கடை சுத்தம்
          செய்யும் பணியில் ஈடுபட்டுகொண்டுஇருந்தார் அதன் பிறகு லாரி ஓட்டுநர் சேகர் மூலமாக கொத்தனார் (மேஸ்திரி) நடராஜ் அறிமுகமாகிறார் அதன் பிறகு அவருடன் இனைந்து கட்டுமான பணிகளை செய்துவந்தார், இரவு நேரங்களில் கோயம்பேடு
          பேருந்து நிலையத்தில் தங்கி வந்தார்.
        </p>

        <p className="mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          🔨 காலங்கள் கடந்தது; கட்டுமான வேலை செய்யும் இடத்தில் தங்குவதற்கான
          வாய்ப்பு கிடைத்தது, அதனை பயன்படுத்திக் கொண்டு பணிகளைத் தொடர்ந்தார்.
        </p>

        <p className="mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          🎂 கடந்த காலங்களில் பலநாட்களாக உணவின்றி தவித்த நிலையை உணர்ந்து அவர்  தான் செய்த கட்டுமான பணியில் கிடைத்த பணத்தை வைத்து  <strong>12/05/2011</strong> அன்று,
          அவருடைய பிறந்த நாளை முன்னிட்டு சாலையோரம் இருக்கும் ஆதரவற்ற மக்களுக்கு
          உணவு கொடுக்க முடிவு செய்து, நான்கு முதியோர்களுக்கு உணவு வாங்கி கொடுத்து
          பெரு மகிழ்ச்சி அடைந்தார்.
        </p>

        <p className="mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          🍛 அவர்களின் வயிற்று பசியை போக்க வேண்டும் என்று தன்னால் இயன்ற
          போதெல்லாம் தொடர்ந்து உணவு கொடுத்துள்ளார்.
        </p>

        <p className="mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          🤝 இதையே தொடர்ச்சியான சேவையாக செய்ய முடிவெடுத்த அவர்,{" "}
          <strong>2014 ஆம் ஆண்டு</strong> தனக்குத் தெரிந்த பல இளைஞர்களை ஒன்று
          திரட்டி கலந்தாய்வுக் கூட்டம் நடத்தி, அந்த இளைஞர்கள் மூலமாக தமிழ்நாடு
          முழுவதும் பல சமூக சேவைகளை செய்ய வேண்டும் என்று உறுதி எடுத்தார்.
        </p>

        <p className="mb-3" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          🏗️ திட்டங்களை வகுத்து செயல்முறைப்படுத்தினார். அதைத்தொடர்ந்து{" "}
          <strong>அகிலம் நண்பர்கள் அறக்கட்டளை</strong> என்ற அமைப்பை உருவாக்கி
          அதில் பல்வேறு செயல் திட்டங்களை வகுத்து நடைமுறைப்படுத்தினார்.
        </p>

        <p className="mb-3 " style={{ lineHeight: "1.8", textAlign: "justify" }}>
          🧓 அதில் ஆதரவற்ற மக்களையும் முதியோரையும் பாதுகாத்து அரசு காப்பகத்தில்
          ஒப்படைத்தார்.
        </p>

        <hr style={{ border: "1px solid #ccc", width: "60px", margin: "20px auto" }} />

        <h6>🩸 <strong>அகிலம் நண்பர்கள் குருதிக்கொடை திட்டம்</strong></h6>
        <p className="mb-3 text-center" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          அரசு மருத்துவமனைக்கு இலவச இரத்ததான முகாம்கள் மற்றும் அவசர காலங்களில் அரசு
          மற்றும் தனியார் மருத்துவமனைகளில் அனுமதிக்கப்பட்ட நோயாளிகளுக்கு இலவச
          இரத்ததான உதவிகளை செய்தார்.
        </p>

        <h6>🎓 <strong>கல்வி உதவிகள்</strong></h6>
        <p className="mb-3 text-center" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          ஏழை எளிய மாணவ மாணவியரின் கல்விக்கு பல உதவிகளை அன்று முதல் இன்று வரை
          செய்து வருகிறார்.
        </p>

        <h6>🌧️ <strong>பேரிடர் கால உதவிகள்</strong></h6>
        <p className="mb-3 text-center" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          கொரோனா, வெள்ளம் மற்றும் பேரிடர் காலங்களில் பாதிக்கப்பட்ட மக்களுடன் நின்று,
          அவர்களுக்கு தேவையான அனைத்து உதவிகளையும் செய்து கொடுத்தார்.
        </p>

        <h6>🌿 <strong>இயற்கை பாதுகாப்பு பணிகள்</strong></h6>
        <p className="mb-3 text-center" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          தன் சிறுவயதில் இருந்து இயற்கையின் மீது கொண்ட பேரன்பினால், இயற்கை வளங்களை
          காப்பதும், மரக்கன்றுகள் நடுவதும் என பல இயற்கை பாதுகாப்பு பணிகளை மேற்கொண்டு
          வருகிறார்.
        </p>

        <h6>📖 <strong>இரவு பாடசாலை மற்றும் கல்வி ஊக்கம்</strong></h6>
        <p className="mb-3 text-center" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          ஏழை எளிய மாணவர்கள் இருக்கும் இடங்களில் இரவு பாடசாலை ஏற்பாடு செய்து,
          அவர்களின் கல்விக் கனவை ஊக்குவித்து கல்வி உதவிகளை செய்து வருகிறார்.
        </p>

        <h6>🌾 <strong>இயற்கை விவசாயம்</strong></h6>
        <p className="mb-3 text-center" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          ஐயா நம்மாழ்வாரின் வழியில் சென்று, அவரின் கொள்கையை ஏற்று, இயற்கை
          விவசாயத்தின் பெருமையையும் அதன் பலனையும் அதிக இளைஞர்களுக்கு கற்றுக் கொடுத்து
          வருகிறார்.
        </p>

        <h6>💡 <strong>இளைஞர் விழிப்புணர்வு</strong></h6>
        <p className="mb-3 text-center" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          இளைஞர்களிடம் கல்வி, தொழில் மற்றும் சமூக விழிப்புணர்வை விதைத்து வருகிறார்.
        </p>

        <h6>🧍‍♂️ <strong>ஆதரவற்றோர் & முதியோர் மீட்பு திட்டம்</strong></h6>
        <p className="mb-3 text-center" style={{ lineHeight: "1.8", textAlign: "justify" }}>
          இந்த திட்டத்தின் மூலம் அதிக ஆதரவற்றோரை மீட்டு, அவர்களுக்கு பல உதவிகளை
          செய்து வருகிறார்.
        </p>

        <p className=" fw-bold text-secondary text-center">
          ❤️ அன்றும், இன்றும், என்றும் மக்கள் பணியில் — அகிலம் நண்பர்கள் அறக்கட்டளை!<br />
          🌏 இந்த மண்ணிற்கும் மக்களுக்கும் எல்லா உயிர்களுக்கும் நாம் உதவுவோம்.<br />
           <p className="text-danger mt-2 text-center">🤝 உறவாய் இணைவோம்! உலகையே காப்போம்!</p>
        </p>
         {/* Social Icons */}
      <div className="d-flex justify-content-center mmt gap-3 ">
        <a
          href="http://facebook.com/hari.akilan.73"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-primary fs-4 p-2 rounded-circle bg-light shadow-sm"
          style={{ transition: "all 0.3s ease-in-out" }}
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/akilamnanbarkal/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-danger fs-4 p-2 rounded-circle bg-light shadow-sm"
          style={{ transition: "all 0.3s ease-in-out" }}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@%E0%AE%85%E0%AE%95%E0%AE%BF%E0%AE%B2%E0%AE%AE%E0%AF%8D%E0%AE%A8%E0%AE%A3%E0%AF%8D%E0%AE%AA%E0%AE%B0%E0%AF%8D%E0%AE%95%E0%AE%B3%E0%AF%8D%E0%AE%85%E0%AE%B1%E0%AE%95%E0%AF%8D%E0%AE%95%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%B3%E0%AF%88"
          target="_blank"
          rel="noopener noreferrer"
          className="text-danger fs-4 p-2 rounded-circle bg-light shadow-sm"
          style={{ transition: "all 0.3s ease-in-out" }}
        >
          <FaYoutube />
        </a>
      </div>
      </div>

     
    </div>
  );
};

export default Founder;
