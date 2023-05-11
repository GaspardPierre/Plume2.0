import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// FETCH POEMS ACTION
export const fetchWorks = createAsyncThunk("work/fetchWorks", async () => {
  const response = await axios.get("http://localhost:5000/api/work");
  console.log(`response.data: ${response.data}`);

  return response.data;

});

const workSlice = createSlice({
  name: "work",
  initialState: {
    works: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWorks.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("ACTION.PAYLOAD", action.payload);
        state.works = action.payload;
        console.log('state.works:', state.works);
      })
      .addCase(fetchWorks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default workSlice.reducer;
