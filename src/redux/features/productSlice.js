import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    products: [
        {id: 1, name: 'Product 1', price: '100$'},
        {id: 2, name: 'Product 2', price: '200$'},
        {id: 3, name: 'Product 3', price: '300$'},
    ],
}



const productSlice=createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
           // const id= action.payload;
            state.products = state.products.filter((product) => product.id!==action.payload);
        },
    },
})

export const {addProduct, removeProduct} = productSlice.actions;
export default productSlice.reducer;