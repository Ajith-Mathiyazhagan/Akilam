import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";
import {
  FaUser,
  FaPhone,
  FaTint,
  FaHospital,
  FaNotesMedical,
  FaCalendarAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import tamilnaduData from "../data/tamilnaduData.json";

const Bneedf = () => {
  useEffect(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100); // 100ms delay
}, []);

  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    bloodGroup: "",
    country: "",
    state: "",
    district: "",
    constituency: "",
    name: "",
    age: "",
    gender: "",
    units: "",
    reason: "",
    phone: "",
    helperName: "",
    helperPhone: "",
    hospitalAddress: "",
    consent: false,
    refName: "",
    refMobile: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  // ✅ Handle field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Validation-based Next Step
  const nextStep = () => {
    if (step === 1 && !formData.bloodGroup) {
      alert("உங்கள் ரத்த வகையைத் தேர்ந்தெடுக்கவும்!");
      return;
    }
    if (step === 2 && !formData.country) {
      alert("நாட்டைத் தேர்ந்தெடுக்கவும்!");
      return;
    }
    if (step === 3 && !formData.state) {
      alert("மாநிலத்தைத் தேர்ந்தெடுக்கவும்!");
      return;
    }
    if (step === 4 && !formData.district) {
      alert("மாவட்டத்தைத் தேர்ந்தெடுக்கவும்!");
      return;
    }
    if (step === 5 && !formData.constituency) {
      alert("தொகுதியைத் தேர்ந்தெடுக்கவும்!");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  // ✅ Submit to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("உறுப்பினர் அனுமதியை ஒப்புக்கொள்ளவும்!");
      return;
    }

    try {
      await addDoc(collection(db, "bloodRequests"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      
     // ✅ Phone number check & default country code
    let phoneWithCode = formData.phone;
    if (!phoneWithCode.startsWith("+")) {
      phoneWithCode = "+91" + phoneWithCode;
    }

    // ✅ Prepare payload for Make.com webhook
    const payload = {
      messaging_product: "whatsapp",
      to: phoneWithCode, // Make.com webhookக்கு இதே number போட வேண்டும்
      text: {
        body: `Blood Request!\nName: ${formData.name}\nBlood Group: ${formData.bloodGroup}\nUnits: ${formData.units}\nHospital: ${formData.hospitalAddress}\nContact: ${formData.helperPhone}`
      }
    };

       // 2️⃣ Send to Make Webhook
    const webhookURL = "https://hook.eu2.make.com/d33k8t8eievsitnkjbf25i5arqw9jgob"; // Replace with Make webhook URL
    await fetch(webhookURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

      alert("✅ உங்கள் தகவல்கள் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டன!");
      navigate("/");

      // Reset form
      setFormData({
        bloodGroup: "",
        country: "",
        state: "",
        district: "",
        constituency: "",
        name: "",
        age: "",
        gender: "",
        units: "",
        reason: "",
        phone: "",
        helperName: "",
        helperPhone: "",
        hospitalAddress: "",
        consent: false,
        refName: "",
        refMobile: "",
      });
      setStep(1);
    } catch (error) {
      alert("❌ சமர்ப்பிக்கும்போது பிழை ஏற்பட்டது!");
      console.error(error);
    }
  };

  return (
    <div className="container ">
     <div className="container text-center bg-white mt-3 ">
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

      <div className=" text-center bg-white ">
       

      <h4 className="text-center text-danger fw-bold mt-0">
        அகிலம் நண்பர்கள் அறக்கட்டளை 
      </h4>
      <h6 className="text-center fw-light mb-3">
        உறவாய் இணைவோம் உதிரம் கொடுத்து பல உயிர்களை காப்போம்!
      </h6>
      <h5 className="text-center text-danger fw-bold mt-2">
        குருதித்தேவைக்காண பதிவு
      </h5>

      <div className="border p-4 rounded shadow bg-light mb-3">
        {/* Step 1: Blood Group */}
        {step === 1 && (
          <div className="text-center">
            <label className="fw-bold">உங்கள் இரத்த வகையைத் தேர்ந்தெடுக்கவும்</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="form-select my-3"
              required
            >
              <option value="">-- இரத்த வகை --</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <button className="btn btn-primary fw-bold" onClick={nextStep}>அடுத்து</button>
          </div>
        )}
{/* Step 2: Country */}
{step === 2 && (
  <div className="text-center">
    <label className="fw-bold">நாடு</label>
    <select
      name="country"
      value={formData.country}
      onChange={handleChange}
      className="form-select my-3"
    >
      <option value="">-- நாடு தேர்வு செய்யவும் --</option>
      {Object.keys(tamilnaduData).map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
    <button className="btn btn-secondary me-2" onClick={prevStep}>பின் செல்</button>
    <button className="btn btn-primary" onClick={nextStep}>அடுத்து</button>
  </div>
)}

{/* Step 3: State */}
{step === 3 && (
  <div className="text-center">
    <label className="fw-bold">மாநிலம்</label>
    <select
      name="state"
      value={formData.state}
      onChange={handleChange}
      className="form-select my-3"
      disabled={!formData.country}
    >
      <option value="">-- மாநிலம் தேர்வு செய்யவும் --</option>
      {formData.country &&
        Object.keys(tamilnaduData[formData.country]).map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
    </select>
    <button className="btn btn-secondary me-2" onClick={prevStep}>பின் செல்</button>
    <button className="btn btn-primary" onClick={nextStep}>அடுத்து</button>
  </div>
)}

{/* Step 4: District */}
{step === 4 && (
  <div className="text-center">
    <label className="fw-bold">மாவட்டம்</label>
    <select
      name="district"
      value={formData.district}
      onChange={handleChange}
      className="form-select my-3"
      disabled={!formData.state}
    >
      <option value="">-- மாவட்டம் தேர்வு செய்யவும் --</option>
      {formData.state &&
        Object.keys(tamilnaduData[formData.country][formData.state]).map((district) => (
          <option key={district} value={district}>{district}</option>
        ))}
    </select>
    <button className="btn btn-secondary me-2" onClick={prevStep}>பின் செல்</button>
    <button className="btn btn-primary" onClick={nextStep}>அடுத்து</button>
  </div>
)}

{/* Step 5: Constituency */}
{step === 5 && (
  <div className="text-center">
    <label className="fw-bold">தொகுதி</label>
    <select
      name="constituency"
      value={formData.constituency}
      onChange={handleChange}
      className="form-select my-3"
      disabled={!formData.district}
    >
      <option value="">-- தொகுதி தேர்வு செய்யவும் --</option>
      {formData.district &&
        tamilnaduData[formData.country][formData.state][formData.district].map(
          (constituency) => (
            <option key={constituency} value={constituency}>
              {constituency}
            </option>
          )
        )}
    </select>
    <button className="btn btn-secondary me-2" onClick={prevStep}>பின் செல்</button>
    <button className="btn btn-primary" onClick={nextStep}>அடுத்து</button>
  </div>
)}


        {/* Step 6: Full Form */}
        {step === 6 && (
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3 input-group">
              <span className="input-group-text bg-danger text-white"><FaUser /></span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="பெயர் *"
                required
              />
            </div>

            {/* Age + Gender */}
            <div className="row mb-3 g-2">
              <div className="col-6">
                <div className="input-group">
                  <span className="input-group-text bg-danger text-white"><FaCalendarAlt /></span>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="வயது *"
                    required
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="input-group">
                  <span className="input-group-text bg-danger text-white"><FaUser /></span>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">பாலினம் *</option>
                    <option value="Male">ஆண்</option>
                    <option value="Female">பெண்</option>
                    <option value="Other">மற்றவை</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Units + Reason */}
            <div className="row mb-3 g-2">
              <div className="">
                <div className="input-group">
                  <span className="input-group-text bg-danger text-white"><FaTint /></span>
                  <input
                    type="number"
                    name="units"
                    value={formData.units}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="அளவு (Units) *"
                    required
                  />
                </div>
              </div>
             
            </div>
 <div className="mb-3">
                <div className="input-group">
                  <span className="input-group-text bg-danger text-white"><FaNotesMedical /></span>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="தேவைக்கான காரணம் *"
                    required
                  />
                </div>
              </div>
            
          
            
            {/* Phone */}
            <div className="mb-3 input-group">
              <span className="input-group-text bg-danger text-white"><FaPhone /></span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="தொலைபேசி எண் *"
                required
              />
            </div>

            {/* Helper */}
            <div className="mb-3 input-group">
              <span className="input-group-text bg-danger text-white"><FaUser /></span>
              <input
                type="text"
                name="helperName"
                value={formData.helperName}
                onChange={handleChange}
                className="form-control"
                placeholder="உதவியாளர் பெயர் *"
                required
              />
            </div>

            <div className="mb-3 input-group">
              <span className="input-group-text bg-danger text-white"><FaPhone /></span>
              <input
                type="tel"
                name="helperPhone"
                value={formData.helperPhone}
                onChange={handleChange}
                className="form-control"
                placeholder="உதவியாளர் தொலைபேசி எண் *"
                required
              />
            </div>

            {/* Hospital Address */}
            <div className="mb-3 input-group">
              <span className="input-group-text bg-danger text-white"><FaHospital /></span>
              <textarea
                name="hospitalAddress"
                value={formData.hospitalAddress}
                onChange={handleChange}
                className="form-control"
                placeholder="மருத்துவமனையின் முகவரி *"
                required
              />
            </div>

            {/* Reference */}
            <div className="mb-3 input-group">
              <span className="input-group-text bg-danger text-white"><FaUser /></span>
              <input
                type="text"
                name="refName"
                value={formData.refName}
                onChange={handleChange}
                className="form-control"
                placeholder="(Reference) பெயர்"
              />
            </div>

            <div className="mb-3 input-group">
              <span className="input-group-text bg-danger text-white"><FaPhone /></span>
              <input
                type="tel"
                name="refMobile"
                value={formData.refMobile}
                onChange={handleChange}
                className="form-control"
                placeholder="(Reference) தொலைபேசி எண்"
              />
            </div>

            {/* Consent */}
            <div className="form-check mb-3">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="form-check-input"
                required
              />
              <label className="form-check-label">
                நான் கொடுத்த தகவல்கள் உண்மை மற்றும் சரியானவை என்பதை உறுதி செய்கிறேன்
              </label>
            </div>

            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary" type="button" onClick={prevStep}>
                பின் செல்
              </button>
              <button className="btn btn-success fw-bold" type="submit">
                சமர்ப்பிக்கவும்
              </button>
            </div>
          </form>
        )}
      </div>
      </div>
    </div>
  );
};

export default Bneedf;
