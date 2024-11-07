import React from 'react'
// import Modal from "../components/Form/Modal"
import { logout } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

function Header() {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch()
 const navigate = useNavigate()
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:7000/logout', {}, { withCredentials: true });
      
      if (response.status === 200) {
       
        dispatch(logout());
        console.log(response.data.message)
        navigate("/")
      
      } else {
      
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Logout failed:", error.response ? error.response.data : error.message);
    }
  };
  
  return (
    <div>
        <div className='header' style={{display: 'flex',alignItems:'center',justifyContent:'space-between',background:'black',padding:'10px 20px'}}>
        <h1 className="logo" style={{color:'white'}}>TAsk MAn</h1>
        <ul style={{display:'flex',gap:'15px'}}>
          <Link to="/home">
            <li style={{listStyle:'none',color:'white',fontSize:'16px',fontWeight:'700'}}>Home</li>
            </Link>
           <Link to="/complete">
            <li style={{listStyle:'none',color:'white',fontSize:'16px',fontWeight:'700'}}>complete</li>
            </Link>
           <Link to="/pending">
            <li style={{listStyle:'none',color:'white',fontSize:'16px',fontWeight:'700'}}>pending</li>
            </Link>
            <Link to="/progress">
            <li style={{listStyle:'none',color:'white',fontSize:'16px',fontWeight:'700'}}>on-progress</li>
            </Link>
        </ul>
        <div className="signin" style={{display:'flex', gap:'15px'}}>
            <button className='btn' style={{padding:'15px 20px', color:'white', border:'none', borderRadius:'5px', fontSize:'14px', fontWeight:'700', background:'turquoise'}} onClick={handleLogout}>logout</button>
            {/* <button className='btn' sign-in</button> */}
        </div>
    </div>
    
    </div>
  )
}

export default Header