// import React, { useState } from 'react';
// import image from '../images/taskman.jpg';
// import SignupModal from './SignupModal';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { signinUser } from '../Redux/userSlice';

// function UserAccess() {
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.user);
//   const [showSignup, setModal] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [validationError, setValidationError] = useState('');
//   const navigate = useNavigate()
//   const toggleSignupModal = () => {
//     setModal(!showSignup);
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   dispatch(signinUser({ email, password }))
//   //     .then(() => {
//   //       setEmail('');
//   //       setPassword('');
//   //       navigate('/home')
        
//   //     });
//   // };
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateEmail(email)) {
//       setValidationError('Please enter a valid email address.');
//       return;
//     } else if (password.length < 6) {
//       setValidationError('Password must be at least 6 characters long.');
//       return;
//     }

//     setValidationError('')
    
//     dispatch(signinUser({ email, password }))
//       .unwrap()  
//       .then((response) => {
//         if (response && response.token) { 
//           setEmail('');
//           setPassword('');
//           navigate('/home'); 
//         } else {
          
//           console.error('Login failed:', response.error);
//         }
//       })
//       .catch((error) => {
       
//         console.error('Error during login:', error);
//       });
//   };
  
//   return (
//     <div>
//       <h1 style={{ margin: '0px' }}>Task Man</h1>
//       <div style={{ display: 'flex' }}>
//         <div className="taskMan_img" style={{ width: '50%' }}>
//           <img src={image} alt="Task Management" />
//         </div>
//         <div className="login_page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
//           <div className="form" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//             <h2 style={{ margin: '0px' }}>Login</h2>
//             <form className="login_form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//             {/* <div className="label">
//                 <label htmlFor="username">username</label>
//                 <div className="input">
//                   <input
//                     type="username"
//                     placeholder="ased123rrt@gmail.com"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div> */}
//               <div className="label">
//                 <label htmlFor="email">E-mail</label>
//                 <div className="input">
//                   <input
//                     type="email"
//                     placeholder="ased123rrt@gmail.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//               {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
//               {/* <div className="label">
//                 <label htmlFor="email">E-mail</label>
//                 <div className="input">
//                  <select name="" id="" value={role} onChange={(e)=>setRole(e.target.value)}>
//                   <option value="">select role</option>
//                   <option value="manager">manager</option>
//                   <option value="employee">Employee</option>
//                  </select>
//                 </div>
//               </div> */}
//               <div className="label">
//                 <label htmlFor="password">Password</label>
//                 <div className="input">
//                   <input
//                     type="password"
//                     placeholder="Enter password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//               {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
//               {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
//               <button type="submit" disabled={loading} style={{ marginTop: '10px' }}>
//                 {loading ? 'Logging in...' : 'Log in'}
//               </button>
//             </form>
//             <h6>
//               If you don't have an account,{' '}
//               <a onClick={toggleSignupModal} style={{ cursor: 'pointer', color: 'blue' }}>signup</a>
//             </h6>
//           </div>
//         </div>
//         <SignupModal isOpen={showSignup} onClose={toggleSignupModal} />
//       </div>
//     </div>
//   );
// }

// export default UserAccess;


// import React, { useState } from 'react';
// import image from '../images/taskman.jpg';
// import SignupModal from './SignupModal';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { signinUser } from '../Redux/userSlice';

// function UserAccess() {
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.user);
//   const [showSignup, setModal] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [validationError, setValidationError] = useState('');
//   const navigate = useNavigate();

//   const toggleSignupModal = () => {
//     setModal(!showSignup);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateEmail(email)) {
//       setValidationError('Please enter a valid email address.');
//       return;
//     } else if (!password) {
//       setValidationError('password is inorrect.');
//       return;
//     }

//     setValidationError('');
    
//     dispatch(signinUser({ email, password }))
//       .unwrap()
//       .then((response) => {
//         if (response && response.token) {
//           setEmail('');
//           setPassword('');
//           navigate('/home');
//         } else {
//           console.error('Login failed:', response.error);
//         }
//       })
//       .catch((error) => {
//         console.error('Error during login:', error);
//       });
//   };
  
//   return (
//     <div>
//       <h1 style={{ margin: '0px' }}>Task Man</h1>
//       <div style={{ display: 'flex' }}>
//         <div className="taskMan_img" style={{ width: '50%' }}>
//           <img src={image} alt="Task Management" />
//         </div>
//         <div className="login_page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
//           <div className="form" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//             <h2 style={{ margin: '0px' }}>Login</h2>
//             <form className="login_form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//               <div className="label">
//                 <label htmlFor="email">E-mail</label>
//                 <div className="input">
//                   <input
//                     type="email"
//                     placeholder="ased123rrt@gmail.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="label">
//                 <label htmlFor="password">Password</label>
//                 <div className="input">
//                   <input
//                     type="password"
//                     placeholder="Enter password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </div>
//               </div>
//               {/* Display validation error message only once here */}
//                {error && <p style={{ color: 'red' }}>{error}</p>}
//               {validationError && <p style={{ color: 'red' }}>{validationError}</p>}
//               <button type="submit" disabled={loading} style={{ marginTop: '10px' }}>
//                 {loading ? 'Logging in...' : 'Log in'}
//               </button>
//             </form>
//             <h6>
//               If you don't have an account,{' '}
//               <a onClick={toggleSignupModal} style={{ cursor: 'pointer', color: 'blue' }}>signup</a>
//             </h6>
//           </div>
//         </div>
//         <SignupModal isOpen={showSignup} onClose={toggleSignupModal} />
//       </div>
//     </div>
//   );
// }

// export default UserAccess;

import React, { useState } from 'react';
import image from '../images/taskman.jpg';
import SignupModal from './SignupModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinUser } from '../Redux/userSlice';

function UserAccess() {
  const dispatch = useDispatch();
  const { loading} = useSelector((state) => state.user);
  const [showSignup, setModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');
  const navigate = useNavigate();

  const toggleSignupModal = () => {
    setModal(!showSignup);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setValidationError('Please enter a valid email address.');
      return;
    } else if (!password) {
      setValidationError('Password is incorrect.');
      return;
    }

    setValidationError('');
    
    dispatch(signupUser({ username, email, role, password }))
   .unwrap()  // Unwraps the action, letting you handle success/failure directly
   .then((response) => {
     if (response.ok) { // Assuming your server sends a response with an `ok` status
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


  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
    maxWidth: '400px',
    margin: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const inputStyles = {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '10px',
    width:'94%'
  };

  const buttonStyles = {
    padding: '12px',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const disabledButtonStyles = {
    ...buttonStyles,
    backgroundColor: '#cccccc',
  };

  const errorMessageStyles = {
    color: 'red',
    fontSize: '14px',
  };

  return (
    <div>
      <h1 style={{ margin: '0px' }}>Task Man</h1>
      <div style={{ display: 'flex' }}>
        <div className="taskMan_img" style={{ width: '50%' }}>
          <img style={{width:"100%" ,height:"90%"}} src={image} alt="Task Management" />
        </div>
        <div
          className="login_page"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
          }}
        >
          <div className="form" style={formStyles}>
            <h2 style={{ margin: '0px' }}>Login</h2>
            <form
              className="login_form"
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
              }}
            >
              <div className="label">
                <label htmlFor="email">E-mail</label>
                <div className="input">
                  <input
                    type="email"
                    placeholder="ased123rrt@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyles}
                    required
                  />
                </div>
              </div>
              <div className="label">
                <label htmlFor="password">Password</label>
                <div className="input">
                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={inputStyles}
                    required
                  />
                </div>
              </div>

              {validationError && (
                <p style={errorMessageStyles}>{validationError}</p>
              )}
              {/* {error && <p style={errorMessageStyles}>{error}</p>} */}
              <button
                type="submit"
                disabled={loading}
                style={loading ? disabledButtonStyles : buttonStyles}
              >
                {loading ? 'Logging in...' : 'Log in'}
              </button>
            </form>
            <h6>
              If you don't have an account,{' '}
              <a
                onClick={toggleSignupModal}
                style={{ cursor: 'pointer', color: 'blue' }}
              >
                signup
              </a>
            </h6>
          </div>
        </div>
        <SignupModal isOpen={showSignup} onClose={toggleSignupModal} />
      </div>
    </div>
  );
}

export default UserAccess;

