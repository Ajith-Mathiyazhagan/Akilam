// src/pages/UsersList.js
import React, { useEffect, useState } from "react";
import logo from "../assets/logoakilam.png";
import mt from "../assets/mm.jpg";
import na from "../assets/na.jpg";
import { db, auth } from "../firebase";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (!user) navigate("/login"); // Protect this page
    });

    const q = query(collection(db, "users"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setUsers(data);
    });

    return () => {
      unsubscribe();
      unsubscribeAuth();
    };
  }, [navigate]);

  const handleDelete = async (id) => {
    if (
      window.confirm(
        "நீங்கள் உண்மையில் இந்த பயனரை நீக்க விரும்புகிறீர்களா?"
      )
    ) {
      // Soft delete: set isActive to false
      await updateDoc(doc(db, "users", id), { isActive: false });
      alert("பயனர் முடக்கப்பட்டது!");
    }
  };

  

  return (
    <div className="container mt-3">
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
                  <p className="fw-bold mx-auto text-center mb-0">உலகையே காப்போம்!</p>
                  <img
                    src={mt}
                    alt="Anna"
                    className="img-fluid br w-75 h-50  border-success rounded-circle"
                  />
                </div>
              </div>
               <h6 className=" mt-0 fw-bold blue text-center">
  பதிவு எண் : 587/2019
</h6>
           <h2 className="main-tamil-title text-center mt-2">
          அகிலம் நண்பர்கள் அறக்கட்டளை
        </h2>
        <h4 className="sub-tamil-title text-center">
          தமிழ்நாடு
        </h4>
        
        
      <h3 className="text-center text-primary mb-3">உறுப்பினர்கள் பட்டியல்</h3>
      

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>பயனர் பெயர்</th>
              <th>UID</th>
              <th>நிர்வாகம்</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-danger">
                  பயனர்கள் இல்லை
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.uid || "N/A"}</td>
                  <td>
                    {user.isActive === false ? (
                      <span className="text-danger fw-bold">முடக்கப்பட்டது</span>
                    ) : (
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        நீக்கு
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
