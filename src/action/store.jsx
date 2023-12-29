import { configureStore } from '@reduxjs/toolkit';
import lightboxReducer from './reducer/lightboxSlice';

export const store = configureStore({
	reducer: { lightboxTemplate: lightboxReducer }
});
