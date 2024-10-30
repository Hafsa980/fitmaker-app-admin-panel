import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Verification.css";
import Logo from '../images/logo.png'

function Verification() {
  const [code, setCode] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // Only allow digits

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move focus to the next input field
    if (value && index < code.length - 1) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  const handleConfirm = () => {
    // Check if the code is complete
    if (code.join("") === "1234") { // Replace "1234" with the actual verification logic
      alert("Verification successful!");
      // Navigate to the next page or perform further actions
      navigate("/nextpage");
    } else {
      alert("Invalid verification code. Please try again.");
    }
  };

  return (
    <div className="verification-container">
      <div className="verification-box">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <h2>Verification Code</h2>
        <p>We have sent you a verification code on your given email address and phone number.</p>
        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              className="code-input"
            />
          ))}
        </div>
        <a href="/">Resend Code</a>
        <a href="/" className="change-contact">Change Phone number or Email Address</a>
        <button onClick={handleConfirm} className="confirm-button">Confirm</button>
      </div>
      <div className="image-section">
        <p>Find reliable and highly rated babysitters that fit your schedule effortlessly.</p>
      </div>
    </div>
  );
}

export default Verification;
