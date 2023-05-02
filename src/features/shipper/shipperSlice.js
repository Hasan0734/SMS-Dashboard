import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shippers: [],
}

const shipperSlice = createSlice({
  name: 'shipper',
  initialState,
  reducers: {},
})

export const {} = shipperSlice.actions
export default shipperSlice.reducer
