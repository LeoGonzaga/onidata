import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IProduct {
  name: string;
  avatar: string;
  brand: string;
  price: number;
  stock: number;
  sales: number;
}

const initialState: IProduct = {
  avatar: '',
  brand: '',
  name: '',
  price: 0,
  sales: 0,
  stock: 0,
};

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incrementByAmount: (state, data) => {
      state.name = data.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
