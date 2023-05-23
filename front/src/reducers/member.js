import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// GET ALL MEMBERS ACTION
export const getAllMembers = createAsyncThunk(
  "member/getAllMembers",
  async () => {
    const response = await api.get("/member");
    return response.data;
  }
);

// REGISTER ACTION
export const addMember = createAsyncThunk("member/addMember", async (data) => {
  const response = await api.post("/member/addMember", data);
  return response.data;
});
// DELETE ACTION
export const deleteMember = createAsyncThunk(
  "member/deleteMember",
  async (id) => {
    const response = await api.delete(`/member/${id}`);
    return id;
  }
);


// LOGIN ACTION
export const login = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", data);

      return {
        status: response.status,
        message: response.data,
        payload: response.data,
        role: response.data.member.role,
        pseudo: response.data.member.pseudo,
        id: response.data.member.id,
      };
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
// LOGOUT ACTION
export const logout = createAsyncThunk("logout", async () => {
  return null;
});

const memberSlice = createSlice({
  name: "member",
  initialState: {
    status: "idle",
    error: null,
    role: null,
  },

  extraReducers: (builder) => {
    builder

      // Handle get all members actions
      .addCase(getAllMembers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllMembers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.members = action.payload;
      })
      .addCase(getAllMembers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Handle register actions
      .addCase(addMember.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addMember.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(addMember.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Handle login actions
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.role = action.payload.role;
        state.pseudo = action.payload.pseudo;
        state.id = action.payload.id;
        // dispatch the setMemberRole action creator with the role of the member
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Handle logout actions
      .addCase(logout.fulfilled, (state) => {
        state.role = null;
        state.pseudo = null;
        state.id = null;
      })
      // Handle delete actions
       .addCase(deleteMember.pending, (state) => {  
        state.status = "loading";
      })
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.members = state.members.filter(
          (member) => member.id !== action.payload.id
        );
      })
      .addCase(deleteMember.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;

      });
  },
    
});
  

export default memberSlice.reducer;
