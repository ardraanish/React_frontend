// import React from 'react'
// import Header from '../components/Header'
// import TaskComponent from "../components/TaskComponent"
// function Index() {
//   return (
     
//     <div> 
//       <Header/>
//       <TaskComponent/>
//     </div>
//   )
// }

// export default Index

import React, { Suspense } from 'react';
import Footer from './Footer';
import withAuth from './withAuth';

const Header = React.lazy(() => import('../components/Header'));
const TaskComponent = React.lazy(() => import('../components/TaskComponent'));

function Index({handleSubmit,handleCloseModal,handleOpenModal,handleDeleteTask,isModalOpen,selectedTask}) {
  return (
    <> 
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>

      <Suspense fallback={<div>Loading Tasks...</div>}>
        <TaskComponent handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} handleSubmit={handleSubmit} handleDeleteTask={handleDeleteTask} isModalOpen={isModalOpen} selectedTask={selectedTask}/>
      </Suspense>
      <Suspense fallback={<div>Loading Tasks...</div>}>
      <Footer/>
      </Suspense>
    </>
  );
}

export default Index;
