

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from "../Redux/userSlice";

function SignupModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const { loading} = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  if (!isOpen) return null;

  const validateForm = () => {
    if (!username || !email || !role || !password) {
      setValidationError("All fields are required.");
      return false;
    }
    if (!validateEmail(email)) {
      setValidationError("Please enter a valid email address.");
      return false;
    }
    setValidationError("");
    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

  dispatch(signupUser({ username, email, role, password }))
  .unwrap()  // This allows us to directly handle the resolved or rejected state
  .then((response) => {
    if (response.ok) {  // Check if response.ok is true
      setUsername('');
      setEmail('');
      setRole('');
      setPassword('');
      onClose();  // Close modal on success
    } else {
      console.error("Signup failed:", response.error || "Unknown error");
    }
  })
  .catch((err) => console.error("Signup failed:", err));


  return (
    <div style={modalStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h3 style={modalHeaderStyle}>Sign Up</h3>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username"
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your username" 
            value={username} 
            style={inputStyle} 
          />
          
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"  
            value={email}
            style={inputStyle} 
          />
          
          <label htmlFor="role">Role</label>
          <select 
            id="role" 
            name="role" 
            onChange={(e) => setRole(e.target.value)} 
            value={role} 
            required
            style={inputStyle}
          >
            <option value="">Select a role</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>
          
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            placeholder="Enter your password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            style={inputStyle} 
          />
          
          {validationError && <p style={errorStyle}>{validationError}</p>}
          
          <button type="submit" style={submitButtonStyle}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          
          {/* {error && <p style={errorStyle}>Error: {error}</p>} */}
          
          <button type="button" onClick={onClose} style={closeButtonStyle}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  backdropFilter: 'blur(5px)', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '25px',
  borderRadius: '10px',
  width: '400px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
};

const modalHeaderStyle = {
  fontSize: '24px',
  marginBottom: '15px',
  textAlign: 'center',
  color: '#333',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const inputStyle = {
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '14px',
};

const submitButtonStyle = {
  padding: '12px 0',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

const errorStyle = {
  color: 'red',
  fontSize: '14px',
  textAlign: 'center',
};

const closeButtonStyle = {
  padding: '10px',
  backgroundColor: '#ccc',
  color: '#333',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px',
  width: '100%',
};
}
export default SignupModal;
