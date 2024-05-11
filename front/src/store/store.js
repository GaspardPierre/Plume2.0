import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; 
import { persistStore, persistReducer } from 'redux-persist';
import memberReducer from'../reducers/member';
import workReducer from'../reducers/work';
import commentReducer from'../reducers/comment';
import averageReducer from'../reducers/average';  
import labelReducer from'../reducers/label';

const persistConfig = {
  key: 'member',
  storage,
};

const persistedMemberReducer = persistReducer(persistConfig, memberReducer);

export const store =  configureStore({
  reducer: {
    member:  persistedMemberReducer,
    work: workReducer,
    comment : commentReducer,
    average : averageReducer,
    label: labelReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),

});
export const persistor = persistStore(store);