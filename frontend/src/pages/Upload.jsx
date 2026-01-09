import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./upload.css";

export default function Upload() {
  const navigate = useNavigate();
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFile = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };
  const [agreed, setAgreed] = useState(false);

  const allUploaded = [
    "aadhaar_front",
    "aadhaar_back",
    "driving_license",
    "vehicle_plate_photo",
    "selfie",
  ].every((k) => files[k]);

  const submit = async () => {
    setLoading(true);

    const formData = new FormData();
    Object.keys(files).forEach((k) => formData.append(k, files[k]));

    try {
      const res = await fetch("https://kyc-service-backend.onrender.com/kyc/verify", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setResult(data);
    } catch {
      alert("Server not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-root">
      {/* TOP BAR (matches AdminIssues header) */}
      <header className="ai-topbar">
        <div className="ai-topbar-row">
          <div className="ai-left-group">
            <button className="ai-back-btn" onClick={() => navigate(-1)} aria-label="Back">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18L9 12L15 6" />
              </svg>
            </button>

            <div className="ai-logo-wrap">
              <img src="/assets/icons/ozu-logo.png" alt="OZU" className="ai-logo-img" />
            </div>
          </div>

         
        </div>
      </header>

      {/* PAGE CONTENT */}
      <div className="upload-page">
        <h2>Verify your Document</h2>

        <div className="upload-wrapper">
          {[
            { key: "aadhaar_front", title: "Aadhaar Card (Front)", text: "Upload aadhaar card front photo" },
            { key: "aadhaar_back", title: "Aadhaar Card (Back)", text: "Upload aadhaar card back photo" },
            { key: "driving_license", title: "Driving License", text: "Upload driving license photo" },
            { key: "vehicle_plate_photo", title: "Vehicle Plate", text: "Upload vehicle number plate photo" },
            { key: "selfie", title: "Selfie", text: "Upload your selfie" }
          ].map(item => (
            <div className="kyc-card" key={item.key}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>

              <label className="file-upload-btn">
                Upload
                <input type="file" name={item.key} onChange={handleFile} />
              </label>

              {files[item.key] && (
                <div className="file-name">{files[item.key].name}</div>
              )}
            </div>
          ))}
        </div>

        <div className="bottom-actions">
          <label className="agree-row">
            <input
              type="checkbox"
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className="agree-text">
              I hereby agree that the above document belongs to me and voluntarily give my consent to OZU to utilize it as my address proof for KYC on purpose only
            </span>
          </label>

          <button
            className="submit-btn"
            onClick={submit}
            disabled={!allUploaded || !agreed || loading}
          >
            {loading ? "Verifying..." : "Submit"}
          </button>
        </div>

        {result && (
          <div className="result-wrapper">
            <div className="result-card">
              <h2 className={`status ${String(result.status || "").toUpperCase()}`}>
                {result.status}
              </h2>

              <p className="confidence">
                Verification Confidence: <b>{Math.round((result.confidence || 0) * 100)}%</b>
              </p>

              {result.reasons?.length > 0 && (
                <div className="result-section">
                  <h4>Reason</h4>
                  <ul>
                    {result.reasons.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              {result.extracted && (
                <div className="result-section">
                  <h4>Extracted Information</h4>

                  {Object.entries(result.extracted).map(([doc, values]) => (
                    <div key={doc} className="doc-box">
                      <h5>{doc.replaceAll("_", " ").toUpperCase()}</h5>

                      <table>
                        <tbody>
                          {Object.entries(values).map(([k, v]) => (
                            <tr key={k}>
                              <td className="label">{k}</td>
                              <td className="value">{String(v)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

