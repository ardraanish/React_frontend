import React, {useState} from 'react'
import Modal from '../components/Form/Modal'

function Footer() {
    const [open, setOpen] = useState(false);
 

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div style={{display: 'flex',alignItems:'center',justifyContent:'center',background:'black',padding:'10px 20px'}}>
        <button style={{padding:'15px 20px', color:'white', border:'none', borderRadius:'5px', fontSize:'14px', fontWeight:'700', background:'turquoise'}} onClick={handleOpen}>Add task</button>
    <Modal handleClose={handleClose} open={open}/>
        
    </div>
  )
}

export default Footer