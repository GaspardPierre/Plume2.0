import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// REGISTER ACTION
export const addMember = createAsyncThunk(
  'member/addMember',
  async (data) => {
    const response = await axios.post('http://localhost:5000/api/member/addMember', data);
    return response.data;
  }
);
// LOGIN ACTION
export const login = createAsyncThunk(
    'login',
    async (data) => {
      const response = await axios.post('http://localhost:5000/api/login', data);
      return response.data;
    }
  );

const memberSlice = createSlice({
  name: 'member',
  initialState: {
    status: 'idle',
    error: null,
    role : null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMember.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addMember.fulfilled, (state, action) => {
        state.status = 'succeeded';
    
      })
      .addCase(addMember.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
         // Handle login actions
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.role = action.payload.role;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
},
});

export default memberSlice.reducer;
