// Header.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import aaa from '../assets/ak.png'; // Adjust the path as necessary

const Header = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    const navCollapseEl = document.getElementById("navbarNav");

    if (window.bootstrap && navCollapseEl) {
      if (!navCollapseEl.classList.contains("show")) {
        navigate(path);
        return;
      }

      const onHidden = () => navigate(path);
      navCollapseEl.addEventListener("hidden.bs.collapse", onHidden, { once: true });

      const bsInst =
        window.bootstrap.Collapse.getInstance(navCollapseEl) ||
        new window.bootstrap.Collapse(navCollapseEl);
      bsInst.hide();
      return;
    }

    const toggler = document.querySelector(".navbar-toggler");
    if (toggler && getComputedStyle(toggler).display !== "none") {
      if (navCollapseEl && navCollapseEl.classList.contains("show")) {
        toggler.click();
      }
    }

    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-lg color fixed-top shadow ">
      <div className="container-fluid">
        <img
          src={aaa}
          alt="Logo"
          style={{ height: "50px", width: "150px", cursor: "pointer" }}
          className="ms-2"
        />

        <button
          className="navbar-toggler mx-3 text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>

        <div className="collapse navbar-collapse text-light mx-3" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn text-start text-light" onClick={() => handleNavClick("/")}>
                <i className="bi bi-house-door-fill me-2 text-danger"></i> முகப்பு
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn text-start text-light" onClick={() => handleNavClick("/FounderDetails")}>
                <i className="bi bi-person-badge-fill me-2 text-danger"></i> நிறுவனர்
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn text-start text-light" onClick={() => handleNavClick("/Help")}>
                <i className="bi bi-hand-thumbs-up-fill me-2 text-danger"></i> உதவி செய்ய
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn text-start text-light" onClick={() => handleNavClick("/Whatsapp")}>
                <i className="bi bi-chat-dots-fill me-2 text-danger"></i> உதவி பெற
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
