import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { FaTint, FaUsers, FaRegCalendarAlt } from "react-icons/fa";

const CountBox = ({ title, count, icon, description, color }) => (
  <div className="col-12 col-md-4 mb-3">
    <div
      className="card text-center shadow-sm rounded"
      style={{ minHeight: "100px", border: "1px solid #dc3545" }}
    >
      <div className="card-body d-flex flex-column justify-content-center align-items-center ">
        <div className="fs-1">{icon}</div>
        <h2 className="fw-bold " style={{ color: color }}>{count}+</h2>
        <h5 className="fw-bold" style={{ color: color }}>{title}</h5>
        {description && (
          <p className="text-muted mb-0">{description}</p>
        )}
      </div>
    </div>
  </div>
);

const Count = () => {
  const [totalDonors, setTotalDonors] = useState(0);
  const [teamCount, setTeamCount] = useState(0);

  useEffect(() => {
    const colRef = collection(db, "donors");
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      setTotalDonors(snapshot.size);
    });

    // Example: fetch team count from Firestore or set manually
    const fetchTeamCount = async () => {
      try {
        const count = 12; // replace with actual logic or Firestore fetch
        setTeamCount(count);

        // Save teamCount to Firestore
        await addDoc(collection(db, "newRegisters"), {
          teamCount: count,
          createdAt: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    };

    fetchTeamCount();

    return () => unsubscribe();
  }, []);

  return (
    <div className="container ">
      <p className="h4 fw-bold">எங்களுடைய பங்களிப்புகள்</p>
      <div className="row ">
        <CountBox 
          title="மொத்த ரத்த தானியாளர்கள்"
          count={totalDonors}
          icon={<FaTint className="text-danger" />}
          description={`15+ ஆண்டுகளாக சேவை செய்துகொண்டுவருகிறோம்`}
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
          count={200}
          icon={<FaRegCalendarAlt className="text-success" />}
          description="200+ புதிய உயிர்களை காப்போம் அடுத்த ஆண்டு"
          color="#28a745"
        />
      </div>
    </div>
  );
};

export default Count;
