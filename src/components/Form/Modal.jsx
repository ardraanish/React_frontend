


// import React, { useState, useEffect } from 'react';
// import { Modal, Box, Button, TextField, Typography } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { createTask, updateTask } from '../../Redux/taskSlice';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// function Modals({ open, handleClose, task }) {
//   const dispatch = useDispatch();

//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');
//   const [status, setStatus] = useState('');

//   // Populate form with task data if editing
//   useEffect(() => {
//     if (task) {
//       const formattedDate = task.date ? new Date(task.date).toISOString().slice(0, 10) : '';
//       setTitle(task.title);
//       setDescription(task.description);
//       setDate(formattedDate);
//       setStatus(task.status);
//     } else {
//       setTitle('');
//       setDescription('');
//       setDate('');
//       setStatus('');
//     }
//   }, [task]);

//   const handleSubmit = () => {
//     const taskData = { title, description, date, status };

//     if (task) {
//       // Edit existing task
//       dispatch(updateTask({ id: task._id, updatedData: taskData }));
//     } else {
//       // Add new task
//       dispatch(createTask(taskData));
//     }

//     // Clear the form
//     setTitle('');
//     setDescription('');
//     setDate('');
//     setStatus('');

//     handleClose();
//   };



//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="input-modal-title"
//       aria-describedby="input-modal-description"
//     >
//       <Box sx={style}>
//         <Typography id="input-modal-title" variant="h6" component="h2">
//           {task ? 'Edit Task' : 'Add Task'}
//         </Typography>
        
//         <label htmlFor="title">Title</label>
//         <TextField
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <label htmlFor="description">Description</label>
//         <TextField
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <label htmlFor="date">Date</label>
//         <TextField
//           variant="outlined"
//           fullWidth
//           margin="normal"
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />

//         <label htmlFor="status">Status</label>
//         <select
//           name="status"
//           id="status"
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '16px' }}
//         >
//           <option value="">Choose</option>
//           <option value="pending">Pending</option>
//           <option value="complete">Complete</option>
//           <option value="progress">Progress</option>
//         </select>

//         <Button
//           variant="contained"
//           onClick={handleSubmit}
//           fullWidth
//           color="primary"
//         >
//           {task ? 'Update Task' : 'Submit'}
//         </Button>
//       </Box>
//     </Modal>
//   );
// }

// export default Modals;

import React, { useState, useEffect } from 'react';
import { Modal, Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createTask, updateTask } from '../../Redux/taskSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Modals({ open, handleClose, task }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    date: '',
    status: '',
  });
  useEffect(() => {
    if (task) {
      const formattedDate = task.date ? new Date(task.date).toISOString().slice(0, 10) : '';
      setTitle(task.title);
      setDescription(task.description);
      setDate(formattedDate);
      setStatus(task.status);
    } else {
      setTitle('');
      setDescription('');
      setDate('');
      setStatus('');
    }
  }, [task]);
  const validate = () => {
    let valid = true;
    let errors = {};

    if (!title.trim()) {
      errors.title = 'Title is required';
      valid = false;
    }

    if (!description.trim()) {
      errors.description = 'Description is required';
      valid = false;
    }

    if (!date) {
      errors.date = 'Date is required';
      valid = false;
    }

    if (!status) {
      errors.status = 'Status is required';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };
  const handleSubmit = () => {
    if (!validate()) return;
    const taskData = { title, description, date, status };
    if (task) {
      
      dispatch(updateTask({ id: task._id, updatedData: taskData }));
    } else {
      
      dispatch(createTask(taskData));
    }

    setTitle('');
    setDescription('');
    setDate('');
    setStatus('');

    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="input-modal-title"
      aria-describedby="input-modal-description"
    >
      <Box sx={style}>
        <Typography id="input-modal-title" variant="h6" component="h2">
          {task ? 'Edit Task' : 'Add Task'}
        </Typography>
        <label htmlFor="title">Title</label>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={!!errors.title}
          helperText={errors.title}
        />
        <label htmlFor="description">Description</label>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={!!errors.description}
          helperText={errors.description}
        />
        <label htmlFor="date">Date</label>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          error={!!errors.date}
          helperText={errors.date}
        />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '16px' }}
        >
          <option value="">Choose</option>
          <option value="pending">Pending</option>
          <option value="complete">Complete</option>
          <option value="progress">Progress</option>
        </select>
        {errors.status && <p style={{ color: 'red' }}>{errors.status}</p>}
        <Button
          variant="contained"
          onClick={handleSubmit}
          fullWidth
          color="primary"
        >
          {task ? 'Update Task' : 'Submit'}
        </Button>
      </Box>
    </Modal>
  );
}

export default Modals;
