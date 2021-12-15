import {configureStore} from '@reduxjs/toolkit';
import messageReducer from './messageSlice';
import usersReducer from './userSlice';

const store = configureStore({
  reducer: {
    message: messageReducer,
    users: usersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
