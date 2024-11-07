import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../Redux/userSlice'
import taskReducer from "../Redux/taskSlice"

const Store = configureStore({
    reducer: {
      user: userReducer,
      tasks:taskReducer
    },
  });
  
  export default Store;