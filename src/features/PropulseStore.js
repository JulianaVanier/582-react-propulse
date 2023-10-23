import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export const PropulseSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],

    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
            console.log("state products",  state.products);
        },

    },});
//export to have acess 
export const {setProducts} = PropulseSlice.actions;

export default PropulseSlice.reducer;
