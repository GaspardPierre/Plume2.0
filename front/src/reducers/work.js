import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import checkAuthAndRole from "../utils/checkAuthAndRole ";
import api from "../api";

// FETCH POEMS ACTION
export const fetchWorks = createAsyncThunk("work/fetchWorks", async () => {
  const response = await api.get("/work");
  console.log(`response.data: ${response.data}`);

  return response.data;

});

// FETCH lATEST POEM ACTION
export const fetchLatestWork = createAsyncThunk("work/fetchLatestWork", async () => {
  const response = await api.get("/work/latest");
  console.log(`response.data: ${response.data}`);

  return response.data;

});
// FETCH SINGLE POEM ACTION
export const fetchWork = createAsyncThunk("work/fetchWork", async (id) => {
  console.log(`id dans le Slice: ${id}`);
  const response = await api.get(`/work/${id}`);
  return response.data;
});

// ADD POEM ACTION

  export const addWork = createAsyncThunk("work/addWork", async (work, { dispatch }) => {
    try {
      checkAuthAndRole();
      const response = await api.post("/work/addwork", work, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      dispatch(fetchWorks()); // Assuming fetchWorks is an action that needs to be imported
      return response.data;
    } catch (error) {
      return dispatch(showAlert(error.message)); // showAlert should be an action that handles displaying errors
    }
  });

//DELETE POEM ACTION

export const deleteWork = createAsyncThunk("work/deleteWork", async ({ id }, { dispatch }) => {
  try {
    checkAuthAndRole();
    const response = await api.delete(`/work/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    return id;
  } catch (error) {
    return dispatch(showAlert(error.message)); // Handling errors similarly
  }
});

const workSlice = createSlice({
  name: "work",
  initialState: {
    works: [],
    latestWork: null, 
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

      // Handle fetch single work

.addCase(fetchWork.pending, (state) => {
  state.status = "loading";
})
.addCase(fetchWork.fulfilled, (state, action) => {
  state.status = "succeeded";
  if (!state.works.some(work => work.id === action.payload.id)) {
    state.works.push(action.payload);
  }
  
})
.addCase(fetchWork.rejected, (state, action) => {
  state.status = "failed";
  state.error = action.error.message;
})

// Handle fetch latest work
.addCase(fetchLatestWork.pending, (state) => {
  state.status = "loading";
})
.addCase(fetchLatestWork.fulfilled, (state, action) => {
  state.status = "succeeded";
  state.latestWork = action.payload;
  
})
.addCase(fetchLatestWork.rejected, (state, action) => {
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
      

        if (action.payload && typeof action.payload === 'object') {
        
          state.works.push(action.payload);
        } else {
          console.error("Réponse inattendue lors de l'ajout d'un travail", action.payload);
        }
      
        console.log(`state.works: ${JSON.stringify(state.works)}`);
      })
      
      
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
