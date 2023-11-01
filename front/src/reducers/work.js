import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

// FETCH POEMS ACTION
export const fetchWorks = createAsyncThunk("work/fetchWorks", async () => {
  const response = await api.get("/work");
  console.log(`response.data: ${response.data}`);

  return response.data;

});

// // FETCH SINGLE POEM ACTION
// export const fetchWork = createAsyncThunk("work/fetchWork", async (id) => {
//   console.log(`id dans le Slice: ${id}`);
//   const response = await api.get(`/work/${id}`);
//   return response.data;
// });

// ADD POEM ACTION
export const addWork = createAsyncThunk("work/addWork", async (work) => {
  console.log(`work: ${work}`);
  const response = await api.post("/work/addwork", work);
  console.log(`response.data: ${JSON.stringify(response.data)}`);

  return response.data;
});
//DELETE POEM ACTION
export const deleteWork = createAsyncThunk("work/deleteWork", async ({id}) => {
  const response = await api.delete(`/work/${id}`);
  return id;
});


const workSlice = createSlice({
  name: "work",
  initialState: {
    works: [],
    status: "idle",
    error: null,
    
  },
  reducers: {
    setShowAdminWork: (state, action) => {
      state.setShowAdminWork = action.payload;
    },
    setShowListWork: (state, action) => {
      state.showListWork = action.payload;
    },
    setShowAddWork: (state, action) => {
      state.showAddWork = action.payload;
    },


  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWorks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.works = action.payload;
        
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
        console.log(`state.works: ${state.works}`);
      } 
      )
      .addCase(addWork.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }
      )
      // Handle delete poem actions
      .addCase(deleteWork.pending, (state) => {
        state.status = "loading";
      }
      )
      .addCase(deleteWork.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.payload;
        state.works = state.works.filter((work) => work.id !== id);
      }
      )
      .addCase(deleteWork.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }
      );



      

  },
});
export const { setShowAdminWork, setShowListWork , setShowAddWork} = workSlice.actions;
export default workSlice.reducer;
