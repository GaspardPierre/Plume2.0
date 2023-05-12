import { configureStore } from '@reduxjs/toolkit';
import memberReducer from'../reducers/member';
import workReducer from'../reducers/work';
import commentReducer from'../reducers/comment';

export default configureStore({
  reducer: {
    member: memberReducer,
    work: workReducer,
    comment : commentReducer,
  },
});
