import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// FETCH POEMS ACTION
export const fetchWorks = createAsyncThunk("work/fetchWorks", async () => {
  const response = await api.get("/work");
  console.log(`response.data: ${response.data}`);

  return response.data;

});

// ADD POEM ACTION
export const addWork = createAsyncThunk("work/addWork", async (work) => {
  const response = await api.post("/work", work);
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
      })
      // Handle add poem actions
      .addCase(addWork.pending, (state) => {
        state.status = "loading";
      }
      )
      .addCase(addWork.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.works.push(action.payload);
      } 
      )
      .addCase(addWork.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }
      );


      

  },
});

export default workSlice.reducer;
