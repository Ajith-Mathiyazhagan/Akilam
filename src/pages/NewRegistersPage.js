import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import na from "../assets/na.jpg";
import mt from "../assets/mm.jpg";
import logo from "../assets/logoakilam.png";
import tamilnaduData from "../data/tamilnaduData.json"; // 👈 import JSON
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  FaUserPlus,
  FaUser,
  FaPhone,
  FaCalendarAlt,
  FaAddressCard,
  FaDownload,
  FaTrash,
  
} from "react-icons/fa";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const NewRegistersPage = () => {
  useEffect(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100); // 100ms delay
}, []);

  const [registers, setRegisters] = useState([]);
  const [filteredRegisters, setFilteredRegisters] = useState([]);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);

  // Filter states
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedConstituency, setSelectedConstituency] = useState("");

 // 🔁 Fetch Firestore Data (auto-skip empty entries)
useEffect(() => {
  const colRef = collection(db, "newRegisters");
  const q = query(colRef, orderBy("createdAt", "desc"));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((item) => {
        // ✅ Keep only entries that have any non-empty value
        const hasValidField = [
          item.name,
          item.phone,
          item.age,
          item.gender,
          item.district,
          item.state,
          item.country,
          item.constituency,
          item.teamCount,
        ].some(
          (value) =>
            value !== undefined &&
            value !== null &&
            String(value).trim() !== ""
        );
        return hasValidField;
      });

    setRegisters(data);
    setFilteredRegisters(data);
    setCount(data.length);
  });

  return () => unsubscribe();
}, []);


  // 🧾 Download PDF
  const handleDownloadPDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input, { scale: 3, useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.height;

      const scaleWidth = (pdfWidth * 0.95) / imgWidth;
      const scaleHeight = pdfHeight / imgHeight;
      const scale = Math.min(scaleWidth, scaleHeight);

      const scaledWidth = imgWidth * scale;
      const scaledHeight = imgHeight * scale;

      const xOffset = (pdfWidth - scaledWidth) / 2;
      const yOffset = (pdfHeight - scaledHeight) / 2;

      pdf.addImage(imgData, "PNG", xOffset, yOffset, scaledWidth, scaledHeight);
      pdf.save(`${selected?.name || "Profile"}.pdf`);
    });
  };

  // 🗑️ Delete function
  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(
      `நீங்கள் உறுதியாக ${name} அவர்களின் பதிவை நீக்க விரும்புகிறீர்களா?`
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "newRegisters", id));
      alert("பதிவு வெற்றிகரமாக நீக்கப்பட்டது ✅");
    } catch (error) {
      console.error("Error deleting document:", error);
      alert("பதிவு நீக்கத்தில் பிழை ஏற்பட்டது ❌");
    }
  };

  // 🎯 Handle Filter Logic
  useEffect(() => {
    let filtered = registers;

    if (selectedCountry)
      filtered = filtered.filter((r) => r.country === selectedCountry);

    if (selectedState)
      filtered = filtered.filter((r) => r.state === selectedState);

    if (selectedDistrict)
      filtered = filtered.filter((r) => r.district === selectedDistrict);

    if (selectedConstituency)
      filtered = filtered.filter((r) => r.constituency === selectedConstituency);

    setFilteredRegisters(filtered);
    setCount(filtered.length);
  }, [selectedCountry, selectedState, selectedDistrict, selectedConstituency, registers]);

  // 🌏 Dropdown data from JSON
  const countries = Object.keys(tamilnaduData);
  const states = selectedCountry
    ? Object.keys(tamilnaduData[selectedCountry] || {})
    : [];
  const districts = selectedState
    ? Object.keys(tamilnaduData[selectedCountry]?.[selectedState] || {})
    : [];
  const constituencies =
    selectedDistrict && selectedState
      ? tamilnaduData[selectedCountry]?.[selectedState]?.[selectedDistrict] || []
      : [];

  return (
    <div className="container text-center mt-3 mb-4">
      {/* 🔰 Header */}
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

      <h4 className="text-center text-danger fw-bold ">
        அகிலம் நண்பர்கள் அறக்கட்டளை
      </h4>
      <p className="text-muted text-center">
        நீ பிறந்த பலனை அடைய வேண்டும் என்றால் பிறருக்கு உதவி செய்
      </p>

      {/* 🧩 Filter Section */}
      <div className="card p-3 mb-4 shadow-sm ">
        
        <div className="row g-3">
          <div className="col-md-3">
           
            <select
              className="form-select"
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedState("");
                setSelectedDistrict("");
                setSelectedConstituency("");
              }}
            >
              <option value="">நாடு தேர்வு</option>
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
          
            <select
              className="form-select"
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedDistrict("");
                setSelectedConstituency("");
              }}
              disabled={!selectedCountry}
            >
              <option value="">மாநிலம் தேர்வு</option>
              {states.map((st) => (
                <option key={st}>{st}</option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
         
            <select
              className="form-select"
              value={selectedDistrict}
              onChange={(e) => {
                setSelectedDistrict(e.target.value);
                setSelectedConstituency("");
              }}
              disabled={!selectedState}
            >
              <option value="">மாவட்டம் தேர்வு</option>
              {districts.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="col-md-3">
            
            <select
              className="form-select"
              value={selectedConstituency}
              onChange={(e) => setSelectedConstituency(e.target.value)}
              disabled={!selectedDistrict}
            >
              <option value="">தொகுதி தேர்வு</option>
              {constituencies.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 👥 Count Card */}
      <div className="card text-center mx-auto col-12 col-md-6 shadow-sm mb-4 border border-danger">
        <div className="card-body d-flex justify-content-center align-items-center gap-3">
          <FaUserPlus className="fs-2 text-danger" />
          <h4 className="mb-0 fw-bold text-danger">
            உறுப்பினர்கள்: {count}
          </h4>
        </div>
      </div>

      {/* 👇 Member List */}
      <div className="row g-3">
        {filteredRegisters.length === 0 ? (
          <p className="text-center text-muted">பதிவுகள் எதுவும் இல்லை</p>
        ) : (
          filteredRegisters.map((data) => (
            <div className="col-md-4 col-sm-6" key={data.id}>
              <div
                className="card shadow-sm border-3 h-100 position-relative"
                style={{ cursor: "pointer" }}
                onClick={() => setSelected(data)}
              >
                <div className="d-flex align-items-center gap-2 p-2">
                  <img
                    src={logo}
                    alt="Profile"
                    className="rounded-circle"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <div>
                    <h6 className="fw-bold text-danger mb-1 d-flex align-items-center">
                      <FaUser className="me-2 text-dark" /> {data.name || "—"}
                    </h6>
                    <p className="mb-1 text-primary fw-bold d-flex align-items-center">
                      <FaPhone className="me-2 text-dark" /> {data.phone || "—"}
                    </p>
                    <p className="mb-0 text-dark fw-bold d-flex align-items-center">
                      <FaCalendarAlt className="me-2" />
                      {data.createdAt?.toDate
                        ? data.createdAt
                            .toDate()
                            .toLocaleDateString("ta-IN")
                        : "—"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔽 Modal (if you add later) */}
       {selected && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-danger border-3 rounded-3">
              <div className="modal-header bg-danger  text-white">
                <h5 className="modal-title text-center">
                  <FaAddressCard className="me-2" />
                  உறுப்பினர் படிவம்
                </h5>
                <button
                  className="btn-close btn-close-white"
                  onClick={() => setSelected(null)}
                ></button>
              </div>

              <div className="modal-body" id="pdf-content">
                <div className="row ">
                  <div className="col-12 text-center  ">
                    <div className="row  text-center">
                      <div className="col-4">
                        <p className="fw-bold mb-0 mx-auto text-center">உறவாய் இணைவோம்!</p>
                        <img
                          src={na}
                          alt="Anna"
                          className="img-fluid w-50 border-success rounded-circle"
                        />
                      </div>
                      <div className="col-4">
                        <p className="fw-bold h2 mb-0 mx-auto text-center">அ</p>
                        <img
                          src={logo}
                          alt="Logo"
                          className="img-fluid w100 logo-img mb-0"
                        />
                      </div>
                      <div className="col-4">
                        <p className="fw-bold mb-0 mx-auto text-center">உலகையே <br></br>காப்போம்!</p>
                        <img
                          src={mt}
                          alt="Anna"
                          className="img-fluid w-50 border-success rounded-circle"
                        />
                      </div>
                  
                    </div>
                    <h4 className="text-primary mt-2 fw-bold mx-auto">
                      அகிலம் நண்பர்கள் அறக்கட்டளை
                    </h4>
                    <h5 className="text-danger">தமிழ்நாடு</h5>
                  </div>

                  {/* Details Table */}
                  <div className="col-12 mt-3 mx-auto">
                    <table className="table text-start  table-sm">
                      <tbody>
                        <tr>
                          <th>பெயர் :</th>
                          <td className="fw-bold h5">{selected.name}</td>
                        </tr>
                         <tr>
                          <th>வயது :</th>
                          <td>{selected.age}</td>
                        </tr>
                        <tr>
                          <th>பாலினம் :</th>
                          <td>{selected.gender}</td>
                        </tr>
                         
                          <tr>
  <th>பிறந்த தேதி :</th>
  <td>
    {selected.dateofbirth
      ? new Date(selected.dateofbirth).toLocaleDateString("en-GB") // DD/MM/YYYY format
      : "—"}
  </td>
</tr>

                        <tr>
                          <th>தொலைபேசி எண் :</th>
                          <td>{selected.phone}</td>
                        </tr>
                        <tr>
                          <th>அவசர எண் :</th>
                          <td>{selected.emergencyPhone}</td>
                        </tr>
                       

                       
                        <tr>
                          <th>தந்தை :</th>
                          <td>{selected.fatherName}</td>
                        </tr>
                        <tr>
                          <th>தாய் :</th>
                          <td>{selected.motherName}</td>
                        </tr>
                        <tr>
                          <th>தொழில் :</th>
                          <td>{selected.occupation}</td>
                        </tr>
                        
                        <tr>
                          <th>ஆதார் எண்:</th>
                          <td>{selected.adhar}</td>
                        </tr>
                        <tr>
                          <th>முகவரி :</th>
                          <td>{selected.address}</td>
                        </tr>
                        <tr>
                          <th>மாநிலம் :</th>
                          <td>{selected.state}</td>
                        </tr>
                        <tr>
                          <th>மாவட்டம் :</th>
                          <td>{selected.district}</td>
                        </tr>
                        <tr>
                          <th>தொகுதி :</th>
                          <td>{selected.constituency}</td>
                        </tr>
                        <tr>
                          <th>இணைந்த நாள் :</th>
                          <td>
                            {selected.createdAt?.toDate
                              ? selected.createdAt
                                  .toDate()
                                  .toLocaleDateString("ta-IN")
                              : "—"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="modal-footer d-flex justify-content-between">
                <button
                  className="btn btn-sm btn-danger "
                  onClick={() =>
                    handleDelete(selected.id, selected.name || "பெயர் இல்லை")
                  }
                >
                  <FaTrash />
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelected(null)}
                >
                  பின் செல்
                </button>
                {/* Delete button (top-right corner) */}
                
                <button className="btn btn-success" onClick={handleDownloadPDF}>
                  <FaDownload className="me-2" />
                  பதிவிறக்கு
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default NewRegistersPage;
