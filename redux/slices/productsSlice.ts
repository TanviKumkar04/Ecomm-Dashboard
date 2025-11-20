import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000"; // FIXED ✅

export const fetchProducts = createAsyncThunk("products/all", async () => {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload; // now it's an array
        state.loading = false;
      });
  },
});

export default productsSlice.reducer;
