import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { FaTint, FaUsers, FaRegCalendarAlt } from "react-icons/fa";

const CountBox = ({ title, count, icon, description, color }) => (
 
  <div className="col-12 col-md-12 col-lg-4 mb-2">
  <div
    className="card text-center shadow-sm rounded"
    style={{
      height: "169px",
      border: "1px solid #dc3545",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px", // reduce inside space
    }}
  >
    <div
      className="card-body d-flex flex-column justify-content-center align-items-center "
      style={{ paddingTop: "5px", paddingBottom: "5px" }}
    >
      <div className="fs-2 mb-1 ">{icon}</div>
      <h2 className="fw-bold mb-1" style={{ color: color }}>
        {count}+
      </h2>
      <h6 className="fw-bold mb-1" style={{ color: color }}>
        {title}
      </h6>
      {description && (
        <p className="text-muted mx-auto text-center mb-0 small">{description}</p>
      )}
    </div>
  </div>
</div>


);

const Count = () => {
  const [totalDonors, setTotalDonors] = useState(0);
  const [teamCount, setTeamCount] = useState(0);

  useEffect(() => {
    // 🔹 1. Total Donors Count (real-time)
    const donorsRef = collection(db, "donors");
    const unsubscribeDonors = onSnapshot(donorsRef, (snapshot) => {
      setTotalDonors(snapshot.size); // total number of donor documents
    });

    // 🔹 2. Team Members Count (real-time)
    const teamRef = collection(db, "newRegisters");
    const unsubscribeTeam = onSnapshot(teamRef, (snapshot) => {
      setTeamCount(snapshot.size); // total number of documents in newRegisters
    });

    // Cleanup
    return () => {
      unsubscribeDonors();
      unsubscribeTeam();
    };
  }, []);

  return (
    <div className="container mx-auto text-center ">
      <p className="h6 fw-bold text-center  ">எங்களுடைய பங்களிப்புகள்</p>
      <div className="row ">
        <CountBox 
          title="மொத்த குருதிக்கொடையாளர்கள்"
          count={totalDonors}
          icon={<FaTint className="text-danger" />}
          description="15+ ஆண்டுகளாக சேவை செய்துகொண்டுவருகிறோம்"
          color="#dc3545"
        />
        <CountBox
          title="எங்கள் குழு உறுப்பினர்கள்"
          count={teamCount}
          icon={<FaUsers className="text-primary" />}
          description="ஒவ்வொரு பணிக்கும் அர்ப்பணிப்புடன் செயல்படும் குழு"
          color="#007bff"
        />
        <CountBox
          title="அடுத்த ஆண்டு குறிக்கோள்"
          count={2000}
          icon={<FaRegCalendarAlt className="text-success" />}
          description="2000+ புதிய உயிர்களை காப்போம் அடுத்த ஆண்டு"
          color="#28a745"
        />
      </div>
    </div>
  );
};

export default Count;
