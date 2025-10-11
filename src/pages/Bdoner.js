import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import tamilnaduData from "../data/tamilnaduData.json";

const Bdoner = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    bloodGroup: "",
    country: "",
    state: "",
    district: "",
    constituency: "",
    name: "",
    fatherName: "",
    motherName: "",
    age: "",
    dob: "",
    phone: "",
    aadhaar: "",
    address: ""
  });

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step]);

  // Handle field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Next & Previous step
  const nextStep = () => {
    if (
      (step === 1 && !formData.bloodGroup) ||
      (step === 2 && !formData.country) ||
      (step === 3 && !formData.state) ||
      (step === 4 && !formData.district) ||
      (step === 5 && !formData.constituency)
    ) {
      alert("கृபயா அனைத்து புலங்களையும் நிரப்பவும்!");
      return;
    }
    setStep(step + 1);
  };
  const prevStep = () => setStep(step - 1);

  // Submit form to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "donors"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      alert("விவரங்கள் வெற்றிகரமாக சேமிக்கப்பட்டது!");
      setFormData({
        bloodGroup: "",
        country: "",
        state: "",
        district: "",
        constituency: "",
        name: "",
        fatherName: "",
        motherName: "",
        age: "",
        dob: "",
        phone: "",
        aadhaar: "",
        address: ""
      });
      setStep(1);
    } catch (err) {
      console.error(err);
      alert("சேமிப்பதில் பிழை ஏற்பட்டது!");
    }
  };

  // Get constituencies for selected district
  const constituencies =
    formData.country &&
    formData.state &&
    formData.district &&
    tamilnaduData[formData.country]?.[formData.state]?.[formData.district];

  return (
    <div className="container py-3">
      <h3 className="mb-3 text-center text-danger fw-bold">இரத்ததானம் செய்யும் பதிவு</h3>
      <form className="border p-4 rounded shadow bg-light" onSubmit={handleSubmit}>
        {/* Step 1: Blood Group */}
        {step === 1 && (
          <div className="text-center">
            <label className="fw-bold">உங்கள் ரத்த வகை</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="form-select my-3"
            >
              <option value="">-- தேர்வு செய்யவும் --</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
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
              {Object.keys(tamilnaduData).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>Back</button>
            <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
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
                Object.keys(tamilnaduData[formData.country]).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
            </select>
            <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>Back</button>
            <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
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
                Object.keys(tamilnaduData[formData.country][formData.state]).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
            </select>
            <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>Back</button>
            <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
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
              {constituencies?.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <button type="button" className="btn btn-secondary me-2" onClick={prevStep}>Back</button>
            <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
          </div>
        )}

        {/* Step 6: Personal Info */}
        {step === 6 && (
          <div>
            <input
              className="form-control mb-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="பெயர் *"
              required
            />
            <input
              className="form-control mb-2"
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="தந்தை பெயர் *"
              required
            />
            <input
              className="form-control mb-2"
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="தாய் பெயர் *"
              required
            />
            <input
              className="form-control mb-2"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="வயது *"
              required
            />
            <input
              className="form-control mb-2"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <input
              className="form-control mb-2"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="தொலைபேசி *"
              required
            />
            <input
              className="form-control mb-2"
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              placeholder="ஆதார் எண்"
            />
            <textarea
              className="form-control mb-3"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="முகவரி *"
              rows="3"
              required
            ></textarea>
            <div className="d-flex justify-content-between">
              <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
              <button type="submit" className="btn btn-success">சமர்ப்பிக்கவும்</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Bdoner;
