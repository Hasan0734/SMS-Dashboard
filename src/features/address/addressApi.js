import { apiSlice } from '../api/apiSlice'

export const addressApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAddresses: builder.query({}),
    getAddress: builder.query({}),
    addAddress: builder.mutation({}),
    updateAddress: builder.mutation({}),
    deleteAddress: builder.mutation({}),
  }),
})

export const {
  useGetAddressesQuery,
  useGetAddressQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
} = addressApi
