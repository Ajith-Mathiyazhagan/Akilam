// src/pages/Lregister.js
import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

const Lregister = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = `${username}@example.com`;

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: username });

      // ✅ Store in Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username,
        uid: userCredential.user.uid,
        createdAt: serverTimestamp(),
      });

      alert("பதிவு வெற்றி! உள்நுழைவு செய்யப்படுகிறது...");
      window.location.href = "/dashboard";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container text-center mb-5">
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
                <p className="fw-bold mx-auto text-center mb-0">உலகை காப்போம்!</p>
                <img
                  src={mt}
                  alt="Anna"
                  className="img-fluid br w-75 h-50  border-success rounded-circle"
                />
              </div>
            </div>
         <h2 className="main-tamil-title text-center mt-2">
        அகிலம் நண்பர்கள் அறக்கட்டளை
      </h2>
      <h4 className="sub-tamil-title text-center">
        தமிழ்நாடு
      </h4>
      
      

      <div className="container d-flex justify-content-center">
        <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
          <h3 className="text-center mainl-tamil-title mb-2">தலைமை உறுப்பினர்கள் பதிவு</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 input-group">
              <span className="input-group-text bg-primary text-white"><FaUser /></span>
              <input
                type="text"
                className="form-control"
                placeholder="பயனர் பெயர் *"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 input-group">
              <span className="input-group-text bg-primary text-white"><FaLock /></span>
              <input
                type="password"
                className="form-control"
                placeholder="கடவுச்சொல் *"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">பதிவு செய்யவும்</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Lregister;
