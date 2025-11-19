import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const fetchProducts = createAsyncThunk("products/all", async () => {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
