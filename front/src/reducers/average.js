import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// FETCH AVERAGE ACTION
export const fetchAverage = createAsyncThunk(
  "average/fetchAverage",
  async () => {
    const response = await api.get("/note");
    console.log(`response.data: ${response.data}`);

    return response.data;
  }
);

// ADD AVERAGE ACTION
export const addAverage = createAsyncThunk(
  "average/addAverage",
  async (data) => {
    console.log("Data:", data);
    const response = await api.post("/note/addNote", data);
    return response.data;
  }
);

const averageSlice = createSlice({
  name: "average",
  initialState: {
    averages: [],
    averageByPoem: {},
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //   handle average ations
      .addCase(fetchAverage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAverage.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("ACTION.PAYLOAD", action.payload);
        // Verify
        if (action.payload.length > 0 && "average" in action.payload[0]) {
          state.averages = action.payload;
        } else {
          console.error("Payload incorrect:", action.payload);
        }
        console.log("state.works:", state.averages);
      })

      .addCase(fetchAverage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //   handle add average ations
      .addCase(addAverage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addAverage.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("ACTION.PAYLOAD", action.payload);
        
        if (typeof action.payload === 'object' && action.payload !== null && "average" in action.payload) {
          state.averages.push(action.payload);
          state.averageByPoem[action.payload.work_id] = action.payload.average;
        } else {
          console.error("Payload incorrect or not an object:", action.payload);
        }
      
        console.log("state.average:", state.averageByPoem);
      })

      .addCase(addAverage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default averageSlice.reducer;
