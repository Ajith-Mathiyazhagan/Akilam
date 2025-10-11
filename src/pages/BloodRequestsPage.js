import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { FaTint } from "react-icons/fa";
import tamilnaduData from "../data/tamilnaduData.json";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";

const BloodRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Filters
  const [filters, setFilters] = useState({
    bloodGroup: "",
    country: "",
    state: "",
    district: "",
    thoguthi: "",
  });

  // Fetch blood requests
  useEffect(() => {
    const colRef = collection(db, "bloodRequests");
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const sorted = data.sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return b.createdAt.toDate() - a.createdAt.toDate();
      });

      setRequests(sorted.slice(0, 15)); // last 15 records
    });

    return () => unsubscribe();
  }, []);

  // Apply filters
  const filteredRequests = requests.filter((r) => {
    return (
      (!filters.bloodGroup || r.bloodGroup === filters.bloodGroup) &&
      (!filters.country || r.country === filters.country) &&
      (!filters.state || r.state === filters.state) &&
      (!filters.district || r.district === filters.district) &&
      (!filters.thoguthi || r.thoguthi === filters.thoguthi)
    );
  });

  // Handle dropdown changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" && { state: "", district: "", thoguthi: "" }),
      ...(name === "state" && { district: "", thoguthi: "" }),
      ...(name === "district" && { thoguthi: "" }),
    }));
  };

  return (
    <div className="container py-3">
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
         <h2 className="main-tamil-title text-center mt-2">
        அகிலம் நண்பர்கள் அறக்கட்டளை
      </h2>
      <h3 className="text-center text-danger fw-bold mb-4">இரத்த தேவைகள்</h3>

      {/* Filters */}
      {!selectedRequest && (
        <div className="row mb-4">
          <div className="col-md-2 mb-2">
            <select
              className="form-select"
              name="bloodGroup"
              value={filters.bloodGroup}
              onChange={handleFilterChange}
            >
              <option value="">ரத்த வகை</option>
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
          </div>

          <div className="col-md-2 mb-2">
            <select
              className="form-select"
              name="country"
              value={filters.country}
              onChange={handleFilterChange}
            >
              <option value="">நாடு</option>
              {Object.keys(tamilnaduData).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="col-md-2 mb-2">
            <select
              className="form-select"
              name="state"
              value={filters.state}
              onChange={handleFilterChange}
              disabled={!filters.country}
            >
              <option value="">மாநிலம்</option>
              {filters.country &&
                Object.keys(tamilnaduData[filters.country]).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
            </select>
          </div>

          <div className="col-md-2 mb-2">
            <select
              className="form-select"
              name="district"
              value={filters.district}
              onChange={handleFilterChange}
              disabled={!filters.state}
            >
              <option value="">மாவட்டம்</option>
              {filters.state &&
                Object.keys(tamilnaduData[filters.country][filters.state]).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
            </select>
          </div>

          <div className="col-md-2 mb-2">
            <select
              className="form-select"
              name="thoguthi"
              value={filters.thoguthi}
              onChange={handleFilterChange}
              disabled={!filters.district}
            >
              <option value="">தொகுதி</option>
              {filters.district &&
                tamilnaduData[filters.country][filters.state][filters.district].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
            </select>
          </div>
        </div>
      )}

      {/* Cards List */}
      {!selectedRequest && (
        <div className="row">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((req) => (
              <div className="col-12 col-md-6 col-lg-4 mb-3" key={req.id}>
                <div
                  className="card shadow-sm p-3 border border-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedRequest(req)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <FaTint className="fs-1 text-danger" />
                    <div>
                      <h5 className="mb-1">{req.name} ({req.age} வயது)</h5>
                      <p className="mb-1">பாலினம்: {req.gender}</p>
                      <p className="mb-1">ரத்த வகை: {req.bloodGroup}</p>
                      {req.helperName && <p className="mb-1"><strong>உதவியாளர்:</strong> {req.helperName} ({req.helperPhone})</p>}
                      {req.createdAt && (
                        <p className="mb-1">
                          <strong>தேதி:</strong>{" "}
                          {req.createdAt.toDate().toLocaleString("ta-IN")}
                        </p>
                      )}
                      {req.units > 1 && <span className="badge bg-danger">அவசரம்</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">தகவல் இல்லை</p>
          )}
        </div>
      )}

      {/* Selected Request Modal */}
      {selectedRequest && (
        <div className="card p-4 shadow-sm">
          <button
            className="btn btn-secondary mb-3"
            onClick={() => setSelectedRequest(null)}
          >
            மீண்டும் பட்டியலுக்கு
          </button>

          <h5 className="text-danger fw-bold mb-3">
            {selectedRequest.name} ({selectedRequest.age} வயது)
          </h5>

          <p><strong>பாலினம்:</strong> {selectedRequest.gender}</p>
          <p><strong>ரத்த வகை:</strong> {selectedRequest.bloodGroup}</p>
          <p><strong>அளவு (Units):</strong> {selectedRequest.units}</p>
          <p><strong>தேவைக்கான காரணம்:</strong> {selectedRequest.reason}</p>
          <p><strong>தொலைபேசி எண்:</strong> {selectedRequest.phone}</p>
          {selectedRequest.helperName && (
            <p><strong>உதவியாளர் பெயர்:</strong> {selectedRequest.helperName}</p>
          )}
          {selectedRequest.helperPhone && (
            <p><strong>உதவியாளர் தொலைபேசி:</strong> {selectedRequest.helperPhone}</p>
          )}
          <p><strong>மருத்துவமனையின் முகவரி:</strong> {selectedRequest.hospitalAddress}</p>
          {selectedRequest.refName && <p><strong>Reference பெயர்:</strong> {selectedRequest.refName}</p>}
          {selectedRequest.refMobile && <p><strong>Reference தொலைபேசி:</strong> {selectedRequest.refMobile}</p>}
          {selectedRequest.createdAt && (
            <p>
              <strong>சமர்ப்பிக்கப்பட்ட தேதி:</strong>{" "}
              {selectedRequest.createdAt.toDate().toLocaleString("ta-IN")}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default BloodRequestsPage;
