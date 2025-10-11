import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import na from "../assets/na.jpg";
import mt from "../assets/mm.jpg";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {
  FaUserPlus,
  FaUser,
  FaPhone,
  FaCalendarAlt,
  FaAddressCard,
  FaDownload,
} from "react-icons/fa";
import logo from "../assets/logoakilam.png";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const NewRegistersPage = () => {
  const [registers, setRegisters] = useState([]);
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);

  // Fetch Firestore data
  useEffect(() => {
    const colRef = collection(db, "newRegisters");
    const q = query(colRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRegisters(data);
      setCount(snapshot.size);
    });

    return () => unsubscribe();
  }, []);

  // Download PDF
  const handleDownloadPDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${selected.name}_Profile.pdf`);
    });
  };

  return (
    <div className="container mt-4 mb-5">
      <h3 className="text-center text-danger fw-bold mb-4">
        அகிலம் புதிய உறுப்பினர்கள்
      </h3>

      {/* Count Card */}
      <div className="card text-center shadow-sm mb-4 border border-danger">
        <div className="card-body d-flex justify-content-center align-items-center gap-3">
          <FaUserPlus className="fs-2 text-danger" />
          <h4 className="mb-0 fw-bold text-danger">
            புதிய உறுப்பினர்கள்: {count}
          </h4>
        </div>
      </div>

      {/* Member Cards */}
      <div className="row g-3">
        {registers.length === 0 ? (
          <p className="text-center text-muted">பதிவுகள் எதுவும் இல்லை</p>
        ) : (
          registers.map((data) => (
            <div className="col-md-4 col-sm-6" key={data.id}>
              <div
                className="card shadow-sm  border-3 h-100"
                style={{ cursor: "pointer" }}
                onClick={() => setSelected(data)}
              >
                <div className="d-flex align-items-center gap-2 ">
                    <img
                      src={logo}
                      alt="Profile"
                      className="rounded-circle "
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
                        ? data.createdAt.toDate().toLocaleDateString("ta-IN")
                        : "—"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal for Full Details */}
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
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">
                  <FaAddressCard className="me-2" />
                  உறுப்பினர் விவரம்
                </h5>
                <button
                  className="btn-close btn-close-white"
                  onClick={() => setSelected(null)}
                ></button>
              </div>

              <div className="modal-body" id="pdf-content">
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="row  text-center">
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
                    <h4 className="text-primary mt-2">
                   அகிலம் நண்பர்கள் அறக்கட்டளை
                 </h4>
                 <h4 className="sub-tamil-title text-center">
                   தமிழ்நாடு
                 </h4>
                   
                   
                  </div>
                  <div className="col-12 ">
                    <table className="table table-sm">
                      <tbody>
                        <tr>
                            <th>பெயர் :</th>
                            <td className="fw-bold">{selected.name}</td>
                        </tr>
                        <tr>
                            <th>தொலைபேசி எண் :</th>
                            <td>{selected.phone}</td>
                        </tr>
                        <tr> 
                            <th>இணைந்த நாள் :</th>
                            <td><p className="text-dark fw-bold">
                
                      {selected.createdAt?.toDate
                        ? selected.createdAt.toDate().toLocaleDateString("ta-IN")
                        : "—"}
                    </p></td>
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
                          <th>அவசர எண் :</th>
                          <td>{selected.emergencyPhone}</td>
                        </tr>
                        <tr>
                          <th>ஆதார் :</th>
                          <td>{selected.adhar}</td>
                        </tr>
                        <tr>
                          <th>முகவரி :</th>
                          <td>{selected.address}</td>
                        </tr>
                        <tr>
                          <th>நாடு :</th>
                          <td>{selected.country}</td>
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="modal-footer d-flex justify-content-between">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelected(null)}
                >
                பின் செல்
                </button>
                <button
                  className="btn btn-success"
                  onClick={handleDownloadPDF}
                >
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
