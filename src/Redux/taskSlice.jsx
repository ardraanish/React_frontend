import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:7000/home';


// Async Thunks for CRUD operations
export const fetchTasks = createAsyncThunk('home/fetchTask', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const createTask = createAsyncThunk('home/createTask', async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
});

export const updateTask = createAsyncThunk('home/updateTask', async ({ id, updatedData }) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
});



export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
      items: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        
        .addCase(fetchTasks.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchTasks.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
        })
        .addCase(fetchTasks.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        
        .addCase(createTask.fulfilled, (state, action) => {
          state.items.push(action.payload);
        })
      
        .addCase(updateTask.fulfilled, (state, action) => {
          const index = state.items.findIndex((task) => task._id === action.payload._id);
          if (index !== -1) {
            state.items[index] = action.payload; 
          }
        })
        
       
        .addCase(deleteTask.fulfilled, (state, action) => {
          state.items = state.items.filter((task) => task._id !== action.payload);
        });
    },
  });
  
  export default taskSlice.reducer;

  export const selectCompleteTasks = (state) =>
    state.tasks.items.filter((task) => task.status === 'complete');
  
  export const selectPendingTasks = (state) =>
    state.tasks.items.filter((task) => task.status === 'pending');
  
  export const selectOnProgressTasks = (state) =>
    state.tasks.items.filter((task) => task.status === 'progress');
  
