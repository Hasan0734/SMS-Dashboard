import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reviews: [],
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
})

export const {} = reviewsSlice.actions
export default reviewsSlice.reducer
