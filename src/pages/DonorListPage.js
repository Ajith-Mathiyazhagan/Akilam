import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { FaTint } from "react-icons/fa";
import tamilnaduData from "../data/tamilnaduData.json";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";

const DonorListPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // 100ms delay
  }, []);

  const [donors, setDonors] = useState([]);
  const [selectedDonor, setSelectedDonor] = useState(null);

  const [filters, setFilters] = useState({
    bloodGroup: "",
    country: "",
    state: "",
    district: "",
    constituency: "",
  });

  // Fetch donors
  useEffect(() => {
    const colRef = collection(db, "donors");
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const sorted = data.sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
        return b.createdAt.toDate() - a.createdAt.toDate();
      });
      setDonors(sorted.slice(0, 15));
    });
    return () => unsubscribe();
  }, []);

  // Apply filters
  const filteredDonors = donors.filter((d) => {
    return (
      (!filters.bloodGroup || d.bloodGroup === filters.bloodGroup) &&
      (!filters.country || d.country === filters.country) &&
      (!filters.state || d.state === filters.state) &&
      (!filters.district || d.district === filters.district) &&
      (!filters.constituency || d.constituency === filters.constituency)
    );
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" && { state: "", district: "", constituency: "" }),
      ...(name === "state" && { district: "", constituency: "" }),
      ...(name === "district" && { constituency: "" }),
    }));
  };

  return (
    <div className="container my-3">
      <div className="container text-center ">
        <div className=" row text-center">
          <div className=" col-3 col-md-3 col-lg-2">
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
        <h4 className="text-center text-danger fw-bold ">
          அகிலம் நண்பர்கள் அறக்கட்டளை
        </h4>
        <h6 className="text-center fw-light">
          உறவாய் இணைவோம் உதிரம் கொடுத்து பல உயிர்களை காப்போம்!{" "}
        </h6>
        <h4 className="text-center text-danger mb-2 fw-bold ">
          இரத்த தானம் செய்வோரை அறிய
        </h4>
      </div>

      {/* Filters */}
      {!selectedDonor && (
        <div className="row mb-4">
          <div className="col-md-2 mb-2 mx-start text-center">
            <select
              className="form-select"
              name="bloodGroup"
              value={filters.bloodGroup}
              onChange={handleFilterChange}
            >
              <option value="">இரத்த வகை</option>
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map((bg) => (
                <option key={bg} value={bg}>
                  {bg}
                </option>
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
                <option key={c} value={c}>
                  {c}
                </option>
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
                  <option key={s} value={s}>
                    {s}
                  </option>
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
                Object.keys(tamilnaduData[filters.country][filters.state]).map(
                  (d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  )
                )}
            </select>
          </div>

          <div className="col-md-4 mb-2">
            <select
              className="form-select"
              name="constituency"
              value={filters.constituency}
              onChange={handleFilterChange}
              disabled={!filters.district}
            >
              <option value="">தொகுதி</option>
              {filters.district &&
                tamilnaduData[filters.country][filters.state][
                  filters.district
                ].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
            </select>
          </div>
        </div>
      )}

      {/* Cards List */}
      {!selectedDonor && (
        <div className="row">
          {filteredDonors.length > 0 ? (
            filteredDonors.map((donor) => (
              <div className="col-12 col-md-6 col-lg-4 mb-3" key={donor.id}>
                <div
                  className="card shadow-sm p-3 border border-danger"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedDonor(donor)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <FaTint className="fs-1 text-danger" />
                    <div>
                      <h5 className="mb-1">
                        {donor.name} ({donor.age} வயது)
                      </h5>
                      <p className="mb-1">
                        இரத்த வகை:
                        <span className="fw-bold text-danger ms-1">
                          {donor.bloodGroup}
                        </span>
                      </p>
                      <p className="mb-1">
                        தொலைபேசி:
                        <span className="fw-bold text-danger ms-1">
                          {donor.phone}
                        </span>{" "}
                      </p>
                      <p className="mb-1">
                        {donor.district}, {donor.constituency}
                      </p>
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

      {/* Selected Donor Details */}
      {selectedDonor && (
        <div className="card p-4 shadow-sm border border-danger">
          <h5 className="text-danger fw-bold mb-3">
            {selectedDonor.name} ({selectedDonor.age} வயது)
          </h5>
          <p>
            <strong>இரத்த வகை:</strong>
            <span className="fw-bold text-danger ms-1">
              {selectedDonor.bloodGroup}
            </span>
          </p>
          <p>
            <strong>தந்தை பெயர்:</strong> {selectedDonor.fatherName}
          </p>
          <p>
            <strong>தாய் பெயர்:</strong> {selectedDonor.motherName}
          </p>
          <p>
            <strong>தொலைபேசி:</strong>
            <span className="fw-bold text-danger ms-1">
              {selectedDonor.phone}
            </span>
          </p>
          <p>
            <strong>முகவரி:</strong> {selectedDonor.address}
          </p>
          {selectedDonor.aadhaar && (
            <p>
              <strong>ஆதார்:</strong> {selectedDonor.aadhaar}
            </p>
          )}
          {selectedDonor.constituency && (
            <p>
              <strong>தொகுதி:</strong> {selectedDonor.constituency}
            </p>
          )}
          {selectedDonor.createdAt && (
            <p>
              <strong>சமர்ப்பிக்கப்பட்ட தேதி:</strong>{" "}
              {selectedDonor.createdAt.toDate().toLocaleString("ta-IN")}
            </p>
          )}
          <button
            className="btn btn-secondary mb-1"
            onClick={() => setSelectedDonor(null)}
          >
            மீண்டும் பட்டியலுக்கு
          </button>
        </div>
      )}
    </div>
  );
};

export default DonorListPage;
