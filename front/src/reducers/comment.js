import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import checkAuthAndRole from "../utils/checkAuthAndRole ";
import api from "../api";

// FETCH COMMENT ACTION

export const fetchComments = createAsyncThunk(
  "work/fetchComments",
  async (id) => {
    const response = await api.get(`/comment/${id}`);
    console.log(`response.data: ${response.data}`);

    return response.data;
  }
);

// ADD COMMENT ACTION
export const addComment = createAsyncThunk(
  "comment/addMember",
  async (data, { dispatch } ) => {
    try {
      checkAuthAndRole();
      const response = await api.post("/comment/addComment", data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });

      return response.data;
    } catch (error) {
      return dispatch(showAlert(error.message)); 
    }
  });

// DELETE COMMENT ACTION
export const deleteComment = createAsyncThunk(
  "comment/deleteComment",
  async ({ id }) => {
    const response = await api.delete(`/comment/${parseInt(id)}`);
    return id;
  }
);

// RESET COMMENT ACTION
export const resetComment = createAsyncThunk(
  "comment/resetComment",
  async () => {
    return [];
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: {
    comments: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      //   handle comment ations
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("ACTION.PAYLOAD", action.payload);
        state.comments = action.payload;
        console.log("state.works:", state.comments);
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addComment.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.comments.push(action.payload);
        }
      })
      .addCase(addComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteComment.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = state.comments.filter(
          (comment) => comment.id !== action.payload.id
        );
      })
      .addCase(resetComment.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.comments = action.payload;
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default commentSlice.reducer;
