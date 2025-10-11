import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";
import {
  FaUser,
  FaPhone,
  FaCalendarAlt,
  
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import tamilnaduData from "../data/tamilnaduData.json";

const Join = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(2);

  const [formData, setFormData] = useState({
    country: "",
    state: "",
    district: "",
    constituency: "",
    name: "",
    age: "",
    gender: "",
    fatherName: "",
    motherName: "",
    occupation: "",
    phone: "",
    emergencyPhone: "",
    adhar: "",
    address: "",
    consent: false,
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

  // ✅ Step validation
  const nextStep = () => {
    if (step === 2 && !formData.country) return alert("நாட்டைத் தேர்ந்தெடுக்கவும்!");
    if (step === 3 && !formData.state) return alert("மாநிலத்தைத் தேர்ந்தெடுக்கவும்!");
    if (step === 4 && !formData.district) return alert("மாவட்டத்தைத் தேர்ந்தெடுக்கவும்!");
    if (step === 5 && !formData.constituency) return alert("தொகுதியைத் தேர்ந்தெடுக்கவும்!");
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  // ✅ Submit to Firestore (newRegisters)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("உறுப்பினர் அனுமதியை ஒப்புக்கொள்ளவும்!");
      return;
    }

    try {
      await addDoc(collection(db, "newRegisters"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      alert("✅ உங்கள் தகவல்கள் வெற்றிகரமாக சமர்ப்பிக்கப்பட்டன!");
      navigate("/");

      setFormData({
        country: "",
        state: "",
        district: "",
        constituency: "",
        name: "",
        age: "",
        gender: "",
        fatherName: "",
        motherName: "",
        occupation: "",
        phone: "",
        emergencyPhone: "",
        adhar: "",
        address: "",
        consent: false,
      });
      setStep(2);
    } catch (error) {
      alert("❌ சமர்ப்பிக்கும்போது பிழை ஏற்பட்டது!");
      console.error(error);
    }
  };

  return (
    <div className="container">
      {/* Header Section with logo */}
      <div className="container text-center bg-white mt-3">
        <div className="row">
          <div className="col-3 col-md-3 col-lg-2">
            <p className="fw-bold mx-auto text-center mb-0">உறவாய் இணைவோம்!</p>
            <img
              src={na}
              alt="Anna"
              className="img-fluid br w-75 h-50 border-success rounded-circle"
            />
          </div>

          <div className="col-1 col-md-1 col-lg-2"></div>

          <div className="col-4 col-md-4 col-lg-4 text-center">
            <p className="fw-bold h2 mb-0">அ</p>
            <img
              src={logo}
              alt="Logo"
              className="img-fluid logo-img mb-1"
              style={{ width: "90px" }}
            />
            <p className="fw-bold text-danger mt-2">AKILAM FOUNDATION</p>
          </div>

          <div className="col-1 col-md-1 col-lg-2"></div>

          <div className="col-3 col-md-3 col-lg-2 mx-auto">
            <p className="fw-bold mx-auto text-center mb-0">உலகை காப்போம்!</p>
            <img
              src={mt}
              alt="Anna"
              className="img-fluid br w-75 h-50 border-success rounded-circle"
            />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="text-center bg-white mt-2">
        <h2 className="main-tamil-title text-center mt-2">
          அகிலம் நண்பர்கள் அறக்கட்டளை
        </h2>
        <h4 className="sub-tamil-title text-center">தமிழ்நாடு</h4>
        <h5 className="text-center text-primary fw-bold mt-2">
          அகிலம் நண்பர்கள் உறுப்பினர் படிவம்
        </h5>
        <p>உறவாய் இணைவோம்! உலகையே காப்போம்!</p>

        <div className="border p-4 rounded shadow bg-light">
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
              <button className="btn btn-primary" onClick={nextStep}>
                அடுத்து
              </button>
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
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
              </select>
              <button className="btn btn-secondary me-2" onClick={prevStep}>
                பின் செல்
              </button>
              <button className="btn btn-primary" onClick={nextStep}>
                அடுத்து
              </button>
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
                  Object.keys(
                    tamilnaduData[formData.country][formData.state]
                  ).map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
              </select>
              <button className="btn btn-secondary me-2" onClick={prevStep}>
                பின் செல்
              </button>
              <button className="btn btn-primary" onClick={nextStep}>
                அடுத்து
              </button>
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
                  tamilnaduData[formData.country][formData.state][
                    formData.district
                  ].map((constituency) => (
                    <option key={constituency} value={constituency}>
                      {constituency}
                    </option>
                  ))}
              </select>
              <button className="btn btn-secondary me-2" onClick={prevStep}>
                பின் செல்
              </button>
              <button className="btn btn-primary" onClick={nextStep}>
                அடுத்து
              </button>
            </div>
          )}

          {/* Step 6: Main Form */}
          {step === 6 && (
            <form onSubmit={handleSubmit}>
              <div className="mb-3 input-group">
                <span className="input-group-text bg-danger text-white">
                  <FaUser />
                </span>
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

              <div className="row mb-3 g-2">
                <div className="col-6">
                  <div className="input-group">
                    <span className="input-group-text bg-danger text-white">
                      <FaCalendarAlt />
                    </span>
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
                    <span className="input-group-text bg-danger text-white">
                      <FaUser />
                    </span>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="">பாலினம் *</option>
                      <option value="ஆண்">ஆண்</option>
                      <option value="பெண்">பெண்</option>
                      <option value="மற்றவை">மற்றவை</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="input-group ">
                <span className="input-group-text mb-3 bg-danger text-white">
                  <FaUser />
                </span>
                <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="தந்தை பெயர் *"
                required
              />
                </div>
                <div className="input-group ">
                  <span className="input-group-text mb-3 bg-danger text-white">
                  <FaUser />
                </span>
              <input
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="தாய் பெயர் *"
                required
              />
                </div>
                <div className="input-group ">
                    <span className="input-group-text mb-3 bg-danger text-white">
                      <i class="bi bi-award-fill"></i>
                    </span>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="தொழில் *"
                required
              />
                </div>
                <div className="input-group ">
                    <span className="input-group-text mb-3 bg-danger text-white">
                      <FaPhone />
                    </span>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="தொலைபேசி எண் *"
                required
              />
                </div>
                <div className="input-group ">
                    <span className="input-group-text mb-3 bg-danger text-white">
                      <FaPhone />
                    </span>
              <input
                type="tel"
                name="emergencyPhone"
                value={formData.emergencyPhone}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="அவசர தொலைபேசி எண் *"
                required
              />
                </div>
                <div className="input-group ">
                    <span className="input-group-text mb-3 bg-danger text-white">
                      <FaUser />
                    </span>

              <input
                type="text"
                name="adhar"
                value={formData.adhar}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="ஆதார் எண் *"
                required
              />
                </div>
                <div className="input-group ">
                  <span className="input-group-text mb-3 bg-danger text-white">
                    <i class="bi bi-building-fill"></i>
                  </span>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-control mb-3"
                placeholder="முகவரி *"
                required
              ></textarea>
                </div>

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
                  அகிலம் நண்பர்கள் அறக்கட்டளையுடன் இணைய நான் கொடுத்த தகவல்கள் உண்மை மற்றும் சரியானவை என்பதை உறுதி செய்கிறேன்
                </label>
              </div>

              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={prevStep}
                >
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

export default Join;
