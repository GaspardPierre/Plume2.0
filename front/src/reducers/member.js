import { jwtDecode } from "jwt-decode";  
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// Handle token
function getToken() {
  return localStorage.getItem('token');
}


function setToken(token) {
  localStorage.setItem('token', token);
}

function removeToken() {
  localStorage.removeItem('token');
}

// REGISTER ACTION
export const addMember = createAsyncThunk("member/addMember", async (data) => {
  const response = await api.post("/member/addMember", data);
  return response.data;
});
// VERIFYTOKEN ACTION
export const verifyToken = createAsyncThunk("member/verifyToken", () => {
  const token = getToken();
  if (token) {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      removeToken(); 
      return { isLoggedIn: false };
    }
    return { isLoggedIn: true, token, user: decoded };
  }
  return { isLoggedIn: false };
});

// LOGIN ACTION
export const login = createAsyncThunk(
  "login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", data);
      if (response.data.token) {
        const token = response.data.token;
        setToken(token);
        const user = jwtDecode(token);  
        console.log(("role dans le reducer", user.role))
        return { user, token };
      }
      return rejectWithValue('No token received');
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// LOGOUT ACTION
export const logout = createAsyncThunk("member/logout", async () => {
  const response = await api.post("/login/logout");
  localStorage.removeItem('token');  
  return {};
});

const memberSlice = createSlice({
  name: "member",
  initialState: {
    status: 'idle',
    token: '',
    isLoggedIn: false,
    user: null,  
  },
  reducers: {
    toggleRole: (state) => {
      if (state.user) {
        state.user.role = state.user.role === 'admin' ? 'visiteur' : 'admin';
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //ADDMEMBER
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
      //VERIFYTOKEN
      .addCase(verifyToken.fulfilled, (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
        state.token = action.payload.token || '';
        state.user = action.payload.user || null;
      })
      //LOGIN
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.status = 'succeeded';
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
        state.token = '';
        state.user = null;
        state.status = 'failed';
      })
      //LOGOUT
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = '';
        state.user = null;
        removeToken();
      });
  },
});

export const { toggleRole } = memberSlice.actions;
export default memberSlice.reducer;
