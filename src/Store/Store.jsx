
import {configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import ApiHotelByIdReduccers from '../reducers/ApiHotelByIdReduccers';
const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("redux", JSON.stringify(store.getState()));
};

const store = configureStore ({
    reducer:{
        Hotel:ApiHotelByIdReduccers
    },
    devTools:true,
    middleware: [persistanceLocalStorageMiddleware],
})

export const RootState = store.getState

export const  AppDispatch = typeof store.dispatch

export default store
