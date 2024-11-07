import React,{useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserAcess from '../components/userAcess'

import Index from "../components/Index"

import Pending from '../components/Pending'
import Complete from '../components/complete'
import Progress from '../components/progress'
import ProtectedRoute from '../LayoutRoutes/ProtectRoute'

import useTask from '../components/CustumHook/useTask';


function OutputRoutes() {
  const { tasks, status, error, addTask, editTask, removeTask } = useTask();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  // console.log(selectedTask,"selectedTask")

  const handleOpenModal = (task = null) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };

  const handleSubmit = (id, taskData) => {
    if (id) {
      editTask(id, taskData);
    } else {
      addTask(taskData);
    }
    handleCloseModal();
  };

  const handleDeleteTask = (id) => {
    removeTask(id);
  };

  return (
    <Router>
        {/* <Header/> */}
        <Routes>
            <Route path='/' element={<UserAcess/>}/>
            <Route path ='/home' element= {
{/*              <ProtectedRoute> */}

               <Index handleSubmit={handleSubmit} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} handleDeleteTask={handleDeleteTask} isModalOpen={isModalOpen} selectedTask={selectedTask} />
{/*              </ProtectedRoute> */}
       
              }/>
     
            <Route path ='/home/:id' element= {<Index/>}/>
            <Route path='/pending' element={<Pending handleSubmit={handleSubmit} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} handleDeleteTask={handleDeleteTask} isModalOpen={isModalOpen} selectedTask={selectedTask}/>}/>
            <Route path='/complete' element={<Complete handleSubmit={handleSubmit} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} handleDeleteTask={handleDeleteTask} isModalOpen={isModalOpen} selectedTask={selectedTask}/>}/>
            <Route path='/progress' element={<Progress handleSubmit={handleSubmit} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal} handleDeleteTask={handleDeleteTask} isModalOpen={isModalOpen} selectedTask={selectedTask}/>}/>
        </Routes>
    </Router>
  )
}

export default OutputRoutes


