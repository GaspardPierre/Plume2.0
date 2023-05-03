import { configureStore } from '@reduxjs/toolkit';
import memberReducer from'../reducers/member';

export default configureStore({
  reducer: {
    member: memberReducer,
  },
});
