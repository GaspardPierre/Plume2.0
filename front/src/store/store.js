import { configureStore } from '@reduxjs/toolkit';
import memberReducer from'../reducers/member';
import workReducer from'../reducers/work';

export default configureStore({
  reducer: {
    member: memberReducer,
    work: workReducer,
  },
});
