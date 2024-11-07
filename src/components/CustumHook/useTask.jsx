import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks, createTask, updateTask, deleteTask } from '../../Redux/taskSlice';

const useTasks = () => {
  const dispatch = useDispatch();

  const { items: tasks, status, error } = useSelector((state) => state.tasks);
 

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const addTask = (taskData) => {
    dispatch(createTask(taskData));
  };

  const editTask = (id, updatedData) => {
    dispatch(updateTask({ id, updatedData }));
  };

  const removeTask = (id) => {
    dispatch(deleteTask(id));
  };

  return {
    tasks,
    status,
    error,
    addTask,
    editTask,
    removeTask,
  };
};

export default useTasks;
