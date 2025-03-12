import {createSlice} from "@reduxjs/toolkit"

export const initialState ={
    cart:[],
    loadingCart:false,
    errorCart:null
}
export const CartReduccers = createSlice({
    name:"CartRoom",
    initialState,
    reducers:{
        loadingCart:(state) =>{
            state.loadingCart=true
            state.errorCart= null
        },
        setErrorCart:(state) =>{
            state.loadingCart = true
            state.errorCart = "false"
        },
        addItemToCart: (state, action) => {
            const { roomTypeID, quantity, Price, roomsAvailable, startDate, endDate, room_image, nights, person, roomTypeName, persontotal ,validCode} = action.payload;
            const existingRoom = state.cart.find(item => item.roomTypeID === roomTypeID);
        
            if (existingRoom) {
                // Verifica si la cantidad total excede las habitaciones disponibles
                if (existingRoom.quantity + quantity > roomsAvailable) {
                    state.errorCart = false;
                } else {
                    // Incrementa la cantidad y ajusta el precio total
                    existingRoom.quantity += quantity;
                    existingRoom.persontotal += person;
                    existingRoom.Price += Price * quantity;
        
                    // Agrega las personas al array `personsList`
                    existingRoom.personsList = existingRoom.personsList || [];
                    existingRoom.personsList.push(person);
        
                    // Aquí `person` es el número de personas, se añaden `person` veces al array
                }
            } else {
                // Añade el nuevo ítem al carrito con `personsList`
                state.cart.push({
                    roomTypeID,
                    quantity,
                    Price: Price * quantity,
                    roomsAvailable,
                    startDate,
                    endDate,
                    room_image,
                    nights,
                    person,
                    roomTypeName,
                    persontotal,
                    validCode,
                    personsList: [person] 
                });
            }
            state.loadingCart = false;
        },
        removetoCart: (state, action) => {
            const { roomTypeID } = action.payload;
            const existingRoom = state.cart.find((item) => item.roomTypeID === roomTypeID);
            if (existingRoom) {
                if (existingRoom.quantity > 1) {
                    // si la cantidad es mayor que 1, reduce la cantidad en 1
                    existingRoom.quantity -= 1;
                    existingRoom.Price -= existingRoom.Price / (existingRoom.quantity + 1); // actualiza el precio
                } else {
                    // si la cantidad es 1, elimina el artículo del carrito
                    state.cart = state.cart.filter((item) => item.roomTypeID !== roomTypeID);
                }
            }
            state.loadingCart = false;
        },
        removeALL: (state, action) => {
            state.cart = [];
            state.loadingCart = false;
        }
    }
})

export const {loadingCart,addItemToCart,setErrorCart,removetoCart,removeALL} = CartReduccers.actions

export default  CartReduccers.reducers