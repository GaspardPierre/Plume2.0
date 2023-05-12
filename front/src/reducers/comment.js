import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// FETCH COMMENT ACTION

export const fetchComments = createAsyncThunk(
    "work/fetchComments",
    async () => {
        const response = await axios.get("http://localhost:5000/api/comment");
        console.log(`response.data: ${response.data}`);

        return response.data;
    }
);

// ADD COMMENT ACTION
export const addComment = createAsyncThunk(
    "comment/addMember",
    async (data) => {
        console.log("Data:", data);    
        const response = await axios.post(
            "http://localhost:5000/api/comment/addComment",
            data
        );
        return response.data;
    }
);

// DELETE COMMENT ACTION
export const deleteComment = createAsyncThunk(
    "comment/deleteComment",
    async (data) => {
        const response = await axios.delete(
            "http://localhost:5000/api/comment/:id",
            data
        );
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
                state.comments = action.payload;
            })
            .addCase(deleteComment.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default commentSlice.reducer;
