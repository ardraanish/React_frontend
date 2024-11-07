import React from 'react'
import { useSelector } from 'react-redux';
import {  selectPendingTasks} from '../Redux/taskSlice';
import Modals from './Form/Modal';

import Header from './Header';


function Pending({handleOpenModal,handleDeleteTask,isModalOpen,handleCloseModal,selectedTask,handleSubmit}) {
    const pendingTasks = useSelector(selectPendingTasks)
   
    

    
  return (
    <div>
        <Header/>
        <h2>All pending</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {pendingTasks.map((task) => (
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
        <Modals
            open={isModalOpen}
            handleClose={handleCloseModal}
            onSubmit={handleSubmit}
            task={selectedTask}
          />
      </div>
    </div>
  )
}

export default Pending