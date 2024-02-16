import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPackageDetails = createAsyncThunk(
  "packageSlice/fetchPackageDetails",
  async (trackingNumber) => {
    try {
      const res = await fetch(
        `https://tracking.bosta.co/shipments/track/${trackingNumber}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching package details:", error);
      throw error;
    }
  }
);

export const packageSlice = createSlice({
  initialState: {
    data: [],
    status: null,
  },
  name: "packageSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPackageDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPackageDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPackageDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default packageSlice.reducer;
