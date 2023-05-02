import { apiSlice } from '../api/apiSlice'

export const shipperApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getShippers: builder.query({}),
    getShipper: builder.query({}),
    addShipper: builder.mutation({}),
    updateShipper: builder.mutation({}),
    deleteShipper: builder.mutation({}),
  }),
})

export const {
  useGetShippersQuery,
  useGetShipperQuery,
  useAddShipperMutation,
  useUpdateShipperMutation,
  useDeleteShipperMutation,
} = shipperApi
