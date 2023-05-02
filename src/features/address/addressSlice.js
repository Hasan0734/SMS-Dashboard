import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: [],
}

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {},
})

export const {} = addressSlice.actions
export default addressSlice.reducer
