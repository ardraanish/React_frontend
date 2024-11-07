
// // import React, { useState, Suspense } from 'react';
// // import useTask from '../components/CustumHook/useTask';
// // const Modals = React.lazy(() => import('./Form/Modal'));

// // function TaskComponent() {
// //   const { tasks, status, error, addTask, editTask, removeTask } = useTask();
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedTask, setSelectedTask] = useState(null);

// //   const handleOpenModal = (task = null) => {
// //     setSelectedTask(task);
// //     setIsModalOpen(true);
// //   };

// //   const handleCloseModal = () => {
// //     setSelectedTask(null);
// //     setIsModalOpen(false);
// //   };

// //   const handleSubmit = (id, taskData) => {
// //     if (id) {
// //       editTask(id, taskData); 
// //     } else {
// //       addTask(taskData); 
// //     }
// //     handleCloseModal();
// //   };

// //   const handleDeleteTask = (id) => {
// //     removeTask(id);
// //   };

// //   return (
// //     <div style={{ padding: '20px' }}>
// //       <h1>All List</h1>
// //       {status === 'loading' && <p>Loading...</p>}
// //       {error && <p>{error}</p>}

// //       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
// //         {tasks.map((task) => (
// //           <div key={task._id} style={{ border: 'solid 1px', borderRadius: '10px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
// //             <h1 style={{ margin: '0px' }}>{task.title}</h1>
// //             <h3 style={{ margin: '0px' }}>{task.description}</h3>
// //             <p style={{ margin: '0px' }}>{new Date(task.date).toLocaleDateString()}</p>
// //             <p style={{ margin: '0px' }}>{task.status}</p>
// //             <div style={{ display: 'flex', gap: '10px' }}>
// //               <button style={{ padding: '10px 25px', color: 'white', background: 'black', border: 'none', borderRadius: '5px' }} onClick={() => handleOpenModal(task)}>Edit</button>
// //               <button style={{ padding: '10px 25px', color: 'white', background: 'black', border: 'none', borderRadius: '5px' }} onClick={() => handleDeleteTask(task._id)}>Delete</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       <Suspense fallback={<div>Loading...</div>}>
// //         {isModalOpen && (
// //           <Modals open={isModalOpen} handleClose={handleCloseModal} onSubmit={handleSubmit} task={selectedTask} />
// //         )}
// //       </Suspense>
// //     </div>
// //   );
// // }

// // export default TaskComponent;


import React, { useState, Suspense } from 'react';
import useTask from '../components/CustumHook/useTask';
import Pending from '../components/Pending';
import Complete from './complete';
import Progress from './progress';
const Modals = React.lazy(() => import('./Form/Modal'));

function TaskComponent({handleDeleteTask,handleSubmit,handleCloseModal,isModalOpen,selectedTask,handleOpenModal}) {
  const { tasks, status, error, addTask, editTask, removeTask } = useTask();
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedTask, setSelectedTask] = useState(null);
  // console.log(selectedTask,"selectedTask")

  // const handleOpenModal = (task = null) => {
  //   setSelectedTask(task);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setSelectedTask(null);
  //   setIsModalOpen(false);
  // };

  // const handleSubmit = (id, taskData) => {
  //   if (id) {
  //     editTask(id, taskData);
  //   } else {
  //     addTask(taskData);
  //   }
  //   handleCloseModal();
  // };

  // const handleDeleteTask = (id) => {
  //   removeTask(id);
  // };

  return (
    <div style={{ padding: '20px', height:'77vh' }}>
      <h1>All List</h1>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {tasks.map((task) => (
          <div
            key={task._id}
            style={{
              border: 'solid 1px',
              borderRadius: '10px',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              background:'grey'
            }}
          >
            <h1 style={{ margin: '0px' }}>{task.title}</h1>
            <h3 style={{ margin: '0px' }}>{task.description}</h3>
            <p style={{ margin: '0px' }}>
              {new Date(task.date).toLocaleDateString('en-GB')} {/* Format: dd-mm-yyyy */}
            </p>
            <p style={{ margin: '0px' }}>{task.status}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                style={{
                  padding: '10px 25px',
                  color: 'white',
                  background: 'black',
                  border: 'none',
                  borderRadius: '5px',
                }}
                onClick={() => handleOpenModal(task)}
              >
                Edit
              </button>
              <button
                style={{
                  padding: '10px 25px',
                  color: 'white',
                  background: 'black',
                  border: 'none',
                  borderRadius: '5px',
                }}
                onClick={() => handleDeleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
         {/* {type === "home" &&(

<Pending handleDeleteTask={handleDeleteTask} handleOpenModal={handleOpenModal} />
 ) }  
   
   {type === "home" &&(
 <Complete handleDeleteTask={handleDeleteTask} handleOpenModal={handleOpenModal} />
) }
  {type === "home" &&(
 <Progress handleDeleteTask={handleDeleteTask} handleOpenModal={handleOpenModal} />
) } */}
      </div>
     
      <Suspense fallback={<div>Loading...</div>}>
        {isModalOpen && (
          <Modals
            open={isModalOpen}
            handleClose={handleCloseModal}
            onSubmit={handleSubmit}
            task={selectedTask}
          />
        )}
      </Suspense>
     

     
    </div>
    
  );
}

export default TaskComponent;








