import React from "react";
import edu from "../assets/edu.png";
import annan from "../assets/annan.jpg";
import annan2 from "../assets/annan2.jpg";
import imm from "../assets/akk.png";
import h1 from "../assets/h (1).jpg";
import h2 from "../assets/h (2).jpg";
import h3 from "../assets/h (3).jpg";

import h5 from "../assets/h (5).jpg";
import h6 from "../assets/h (6).jpg";   
import h7 from "../assets/h (7).jpg";
import h8 from "../assets/h (8).jpg";
import h9 from "../assets/h (9).jpg";
import h10 from "../assets/h (10).jpg";
import h11 from "../assets/h (11).jpg";
import h12 from "../assets/h (12).jpg";
import h13 from "../assets/h (13).jpg";
import h14 from "../assets/h (14).jpg";
import h15 from "../assets/h (15).jpg";
import h16 from "../assets/h (16).jpg";
import h17 from "../assets/h (17).jpg";
import h18 from "../assets/h (18).jpg";
import h19 from "../assets/h (19).jpg";
import h20 from "../assets/h (20).jpg";
import h21 from "../assets/h (21).jpg";
import w from "../assets/w (1).jpg";
import w1 from "../assets/w (1).jpg";
import w2 from "../assets/w (2).jpg";
import w3 from "../assets/w (3).jpg";
import w4 from "../assets/w (4).jpg";

const images = [
  w,annan, annan2, imm,w1, h1, h2, h3,w4, h5, h6, h7, h8, h9, h10, h11, h12, 
  h13, h14,w2, h15, h16, h17, edu, h18,w3, h19, h20, h21
];

const Img = () => {
  return (
    <div
      className="container-fluid mb-2"
      style={{ overflow: "hidden", padding: "10px 0 0 " }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 200s linear infinite",
        }}
      >
        {images.concat(images).map((img, index) => (
          <div
            key={index}
            className="p-1 my-2 border-0 rounded-4 shadow-sm bg-white text-center"
            style={{ flex: "0 0 auto", width: "260px", marginRight: "15px" }}
          >
            <img 
              src={img}
              alt="" // ✅ ESLint safe: decorative images
              className="img-fluid rounded-4"
              style={{ height: "150px", objectFit: "cover", width: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    
    </div>
  );
};

export default Img;
