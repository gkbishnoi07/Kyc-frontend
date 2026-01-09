import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="ai-root">
      {/* TOP BAR (AdminIssues style) */}
      <header className="ai-topbar">
        <div className="ai-topbar-row">
          <div className="ai-left-group">
            <button
              className="ai-back-btn"
              onClick={() => {
                window.location.href = "https://theozu.com"; 
              }}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18L9 12L15 6" />
              </svg>
            </button>

            <div className="ai-logo-wrap">
              <img
                src="/assets/icons/ozu-logo.png"
                alt="OZU logo"
                className="ai-logo-img"
              />
            </div>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="upload-page home-page">
        <img
          src="/assets/icons/KYC.png"
          alt="KYC illustration"
          className="hero-image"
        />

        <h1 className="home-title">Complete your KYC</h1>
        <p className="subtitle">
          Please submit following documents to get your profile verified.
        </p>

        <div className="list">
          <div className="list-item">
            <div className="list-left">
              <img
                src="/assets/icons/adhar.png"
                alt="Aadhaar icon"
                className="list-icon"
              />
              <div>
                <strong>Verify your Aadhaar</strong>
                <p className="list-desc">Please upload your Aadhaar card</p>
              </div>
            </div>
          </div>

          <div className="list-item">
            <div className="list-left">
              <img
                src="/assets/icons/licence.png"
                alt="Driving license icon"
                className="list-icon"
              />
              <div>
                <strong>Verify your Driving License</strong>
                <p className="list-desc">Please upload your driving license</p>
              </div>
            </div>
          </div>

          <div className="list-item">
            <div className="list-left">
              <img
                src="/assets/icons/coin.png"
                alt="Bank icon"
                className="list-icon"
              />
              <div>
                <strong>Verify your Vehicle Plate</strong>
                <p className="list-desc">Please upload your Vehicle details</p>
              </div>
            </div>
          </div>
        </div>

        <button className="primary-btn" onClick={() => navigate("/upload")}>
          Start Verification
        </button>

        <p className="footer">Made with ❤️ in India</p>
      </div>
    </div>
  );
}
