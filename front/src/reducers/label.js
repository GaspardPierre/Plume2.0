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
        labelId: null,
        works: [], 
        status: "idle",
        error: null,
   
    },
    reducers : {
        setLabelId : (state, action ) => {
            state.labelId = action.payload;      }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLabels.pending, (state) => {
                state.status = "loading";
                state.error = null; 
            })
            .addCase(fetchLabels.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.labels = action.payload;
                state.error = null; 
            })
            .addCase(fetchLabels.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
        builder
            .addCase(fetchWorksByLabel.pending, (state) => {
                state.status = "loading";
                state.error = null; 
            })
            .addCase(fetchWorksByLabel.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.works = action.payload;
                state.error = null; 
            })
            .addCase(fetchWorksByLabel.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });



    }
});

export default labelSlice.reducer;
export const { setLabelId } = labelSlice.actions;