import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
    value: number;
}

const initialState: ProductState = {
    value: 0,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
});

export const productReducer = productSlice.reducer;
