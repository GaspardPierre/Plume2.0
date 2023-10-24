import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
// FETCH LABELS ACTION
export const fetchLabels = createAsyncThunk("label/fetchLabels", async () => {
  const response = await api.get("/label");
  console.log(`response.data: ${response.data}`);

  return response.data;

});

// FETCH wORKS BY LABEL ACTION

export const fetchWorksByLabel = createAsyncThunk(
    "work/fetchWorksByLabel",
    async (labelId) => {
      const response = await api.get(`/work/byLabel/${labelId}`);
    
      return response.data;
    }
  );
  

const labelSlice = createSlice({

    name: "label",
    initialState: {
        labels: [],
        works: [], 
        status: "idle",
        error: null,
   
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLabels.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchLabels.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.labels = action.payload;
            })
            .addCase(fetchLabels.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
        builder
            .addCase(fetchWorksByLabel.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchWorksByLabel.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.works = action.payload;
            })
            .addCase(fetchWorksByLabel.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });



    }
});

export default labelSlice.reducer;