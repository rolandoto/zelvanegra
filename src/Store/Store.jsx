
import {configureStore } from '@reduxjs/toolkit'
import {ApiHotelByIdReduccers} from '../reducers/ApiHotelByIdReduccers';
import {CartReduccers} from '../reducers/CartReduccers';
import {ApiCreateByidHotel} from '../reducers/ApiCreateByidHotel';

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("redux", JSON.stringify(store.getState()));
};

const store = configureStore ({
    reducer:{
        Hotel:ApiHotelByIdReduccers.reducer,
        Cart:CartReduccers.reducer,
        Reservation:ApiCreateByidHotel.reducer
        },
    devTools:true,
    middleware: [persistanceLocalStorageMiddleware],
})

export const RootState = store.getState

export const  AppDispatch = typeof store.dispatch

export default store
