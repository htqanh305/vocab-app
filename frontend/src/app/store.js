import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import vocabReducer from '../features/vocabs/vocabSlice'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      vocabs: vocabReducer,
      
  },
});
