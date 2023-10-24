import { configureStore } from '@reduxjs/toolkit';
import memberReducer from'../reducers/member';
import workReducer from'../reducers/work';
import commentReducer from'../reducers/comment';
import averageReducer from'../reducers/average';  
import labelReducer from'../reducers/label';

export default configureStore({
  reducer: {
    member: memberReducer,
    work: workReducer,
    comment : commentReducer,
    average : averageReducer,
    label: labelReducer
  },
});
