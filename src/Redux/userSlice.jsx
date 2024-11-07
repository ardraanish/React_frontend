// src/redux/signupSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import Cookies from "js-cookie";
const API_URL = import.meta.env.REACT_APP_API_URL_1 || 'http://localhost:7000';

// const API_URL = import.meta.ev 'http://localhost:7000';


// export const signupUser = createAsyncThunk('signupUser', async (signupData, { rejectWithValue }) => {
//   try {
//     const response = await axios.post(API_URL,signupData); // Changed endpoint to /signup
//     return response.data;
//   } catch (error) {
//     return rejectWithValue(error.response ? error.response.data : error.message); // Returns specific error or a fallback message
//   }
// });

export const signupUser = createAsyncThunk(
  'signupUser',
  async (signupData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, signupData);  // Add '/signup' endpoint
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const signinUser = createAsyncThunk('signinUser', async (signinData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, signinData, {withCredentials: true});
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response ? error.response.data : error.message);
  }
});


const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    userData: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      // Clear cookies and reset state
      Cookies.remove("token");
      state.userData = null;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signinUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { logout } = signupSlice.actions;
export default signupSlice.reducer;
